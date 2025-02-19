import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ChallengeCard from '../components/Challenges/ChallengeCard';
import { getChallenges } from '../api/challengesApi';

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const loadChallenges = async () => {
      const data = await getChallenges();
      setChallenges(data);
    };
    loadChallenges();
  }, []); // Added empty dependency array

  return (
    <Container>
      <Grid container spacing={3}>
        {challenges.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge._id}>
            <ChallengeCard challenge={challenge} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}