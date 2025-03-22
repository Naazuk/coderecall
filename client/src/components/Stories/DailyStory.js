import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Card, CardMedia } from '@mui/material';
import axios from 'axios';


export default function DailyStory() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/stories')
      .then(res => setStory(res.data[0]))
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="md">
      
      {story ? (
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={story.featuredImage}
            alt={story.company}
          />
          <Typography variant="h3" gutterBottom>
            {story.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {story.content}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            - {story.founder}, {story.company}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            -  {story.quote}
          </Typography>
        </Card>
      ) : (
        <Typography variant="h4">New story coming soon!</Typography>
      )}
    </Container>
  );
}