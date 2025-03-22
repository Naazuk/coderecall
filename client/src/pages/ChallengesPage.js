import { useEffect, useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import ChallengeCard from '../components/Challenges/ChallengeCard';
import { getChallenges } from '../api/challengesApi';
import TeamUpModal from '../components/TeamUpModal';

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  useEffect(() => {
    const loadChallenges = async () => {
      const data = await getChallenges();
      setChallenges(data);
    };
    loadChallenges();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {challenges.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge._id}>
            <ChallengeCard challenge={challenge} />

            {/* Team Up Button */}
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                console.log("Selected Challenge ID:", challenge._id);
                setSelectedChallenge(challenge._id);
                setTeamModalOpen(true);
              }}
              style={{
                height: 32,
                marginTop: -152,
                left: 113,
              }}
            >
              Team Up
            </Button> */}

          </Grid>
        ))}
      </Grid>

      {/* TeamUpModal Component */}
      <TeamUpModal
        challengeId={selectedChallenge}
        open={teamModalOpen}
        onClose={() => {
          console.log("Closing Modal");
          setTeamModalOpen(false);
        }}
      />
    </Container>
  );
}
