import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubscribeForm from './SubsrcibeForm';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  CardMedia,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Grid
} from '@mui/material';
import { Lightbulb } from '@mui/icons-material';
import axios from 'axios';

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [solutionIdea, setSolutionIdea] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/stories/${id}`);
        setChallenge(response.data);
        setError('');
      } catch (err) {
        setError('Failed to load challenge');
      } finally {
        setLoading(false);
      }
    };
    fetchChallenge();
  }, [id]);

  const handleSolutionSubmit = () => {
    axios.post(`/api/stories/${id}/solutions`, {
      description: solutionIdea
    })
      .then(() => {
        alert('Solution submitted successfully!');
        setOpenDialog(false);
        setSolutionIdea('');
      })
      .catch(console.error);
  };

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {challenge && (
        <Card>
          <CardContent>
            <Chip
              label={challenge.category}
              color="secondary"
              sx={{ mb: 2 }}
            />
            <Typography variant="h2" gutterBottom>
              {challenge.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {challenge.content}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {challenge.founder}
            </Typography>
            <CardMedia
            component="img"
            height="400"
            image={challenge.featuredImage}
            alt={challenge.company}
          />

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Chip
                  label={`Company Name: $${challenge.company}B`}
                  color="primary"
                />
              </Grid>
            </Grid>        
          </CardContent>
        </Card>
      )}

      {/* Solution Proposal Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{challenge?.title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Startup Solution Idea"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={solutionIdea}
            onChange={(e) => setSolutionIdea(e.target.value)}
            sx={{ mt: 2 }}
            placeholder={`Describe your solution for: ${challenge?.title}\n\nInclude:\n- Target audience\n- Technology stack\n- Business model\n- Competitive advantage`}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSolutionSubmit}
            disabled={!solutionIdea}
          >
            Submit Solution
          </Button>
        </DialogActions>
      </Dialog>
      <SubscribeForm />
    </Container>
  );
};

export default ChallengeDetail;