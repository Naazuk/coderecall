import React from 'react';
import { Card, CardContent, Button, Typography, Chip, Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';

export default function ChallengeCard({ challenge }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {challenge.title}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip 
            label={challenge.category}
            color="primary"
            size="small"
          />
          <Chip
            label={challenge.difficulty}
            variant="outlined"
            size="small"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary" paragraph>
          {challenge.description?.substring(0, 120)}...
        </Typography>

        <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<CodeIcon />}
            component={Link}
            to={`/challenges/${challenge._id}`}
            size="small"
          >
            Solve
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<GroupsIcon />}
            component={Link}
            to={`/challenges/${challenge._id}/team`}
            size="small"
          >
            Team Up
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}