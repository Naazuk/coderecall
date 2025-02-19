import React, { useEffect, useState } from 'react';
import { 
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Chip,
  useMediaQuery 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

// Story Card Component
const StoryCard = ({ story }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card 
      sx={{ 
        mx: 2, 
        height: 400,
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows[6]
        }
      }}
      onClick={() => navigate(`/startups/${story._id}`)}
    >
      <CardMedia
        component="img"
        height="200"
        image={story.featuredImage}
        alt={story.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Chip 
          label={story.category} 
          color="primary" 
          size="small" 
          sx={{ mb: 1 }}
        />
        <Typography gutterBottom variant="h5" component="div">
          {story.title}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

// Main Carousel Component
const HomeStoriesCarousel = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/stories');
        setStories(response.data);
      } catch (err) {
        setError('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  // Group stories into chunks for carousel slides
  const chunkArray = (arr, size) => {
    return arr.length > 0 ? 
      arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []) : 
      [];
  };

  const slides = chunkArray(stories, isMobile ? 1 : 3);

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        {/* <CircularProgress /> */}
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        {/* <Alert severity="error">{error}</Alert> */}
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4 }}>
        Featured Startup Stories
      </Typography>
      
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        indicators={!isMobile}
        sx={{ minHeight: 500 }}
      >
        {slides.map((slideStories, index) => (
          <Grid 
            container 
            spacing={3} 
            key={index}
            justifyContent="center"
            sx={{ px: 2 }}
          >
            {slideStories.map((story) => (
              <Grid item xs={12} sm={6} md={4} key={story._id}>
                <StoryCard story={story} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeStoriesCarousel;