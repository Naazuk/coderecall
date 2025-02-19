import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import axios from 'axios';

export default function SubmissionForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    repoUrl: '',
    liveUrl: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post(`/api/challenges/${id}/submit`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccess(true);
      setTimeout(() => window.location = `/challenges/${id}`, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Submit Solution
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Submission successful! Redirecting...
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            required
            label="GitHub Repository URL"
            variant="outlined"
            value={formData.repoUrl}
            onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
          />

          <TextField
            label="Live Demo URL"
            variant="outlined"
            value={formData.liveUrl}
            onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
          />

          <TextField
            required
            label="Project Description"
            variant="outlined"
            multiline
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit Solution'}
          </Button>
        </Stack>
      </form>
    </Container>
  );
}