// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Alert,
//   Grid
// } from '@mui/material';
// import { Lightbulb } from '@mui/icons-material';
// import axios from 'axios';

// const ChallengeDetail = () => {
//   const { id } = useParams();
//   const [challenge, setChallenge] = useState(null);
//   const [solutionIdea, setSolutionIdea] = useState('');
//   const [openDialog, setOpenDialog] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchChallenge = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/challenges/${id}`);
//         setChallenge(response.data);
//         setError('');
//       } catch (err) {
//         setError('Failed to load challenge');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchChallenge();
//   }, [id]);

//   const handleSolutionSubmit = () => {
//     axios.post(`/api/challenges/${id}/solutions`, {
//       description: solutionIdea
//     })
//       .then(() => {
//         alert('Solution submitted successfully!');
//         setOpenDialog(false);
//         setSolutionIdea('');
//       })
//       .catch(console.error);
//   };

//   if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
//   if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;

//   return (
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       {challenge && (
//         <Card>
//           <CardContent>
//             <Chip
//               label={challenge.category}
//               color="secondary"
//               sx={{ mb: 2 }}
//             />
//             <Typography variant="h2" gutterBottom>
//               {challenge.title}
//             </Typography>
//             <Typography variant="body1" paragraph>
//               {challenge.description}
//             </Typography>

//             <Typography variant="h5" gutterBottom>
//               Detailed Problem Statement
//             </Typography>
//             <Typography variant="body1" paragraph sx={{ mb: 4 }}>
//               {challenge.detailedProblemStatement}
//             </Typography>

//             <Grid container spacing={2} sx={{ mb: 2 }}>
//               <Grid item>
//                 <Chip
//                   label={`Market Size: $${challenge.marketSize}B`}
//                   color="primary"
//                 />
//               </Grid>
//               <Grid item>
//                 <Chip
//                   label={`${challenge.solutions?.length || 0} Solutions Proposed`}
//                   color="secondary"
//                 />
//               </Grid>
//             </Grid>

//             <Button
//               variant="contained"
//               startIcon={<Lightbulb />}
//               onClick={() => setOpenDialog(true)}
//               sx={{ mt: 2 }}
//             >
//               Propose Your Solution
//             </Button>
//           </CardContent>
//         </Card>
//       )}

//       {/* Solution Proposal Dialog */}
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>{challenge?.title}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Your Startup Solution Idea"
//             multiline
//             rows={6}
//             fullWidth
//             variant="outlined"
//             value={solutionIdea}
//             onChange={(e) => setSolutionIdea(e.target.value)}
//             sx={{ mt: 2 }}
//             placeholder={`Describe your solution for: ${challenge?.title}\n\nInclude:\n- Target audience\n- Technology stack\n- Business model\n- Competitive advantage`}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSolutionSubmit}
//             disabled={!solutionIdea}
//           >
//             Submit Solution
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default ChallengeDetail;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  CircularProgress,
  Alert,
  Grid
} from '@mui/material';
import { Lightbulb } from '@mui/icons-material';
import axios from 'axios';
import SubmissionForm from '../Challenges/SubmissionForm'; // Import SubmissionForm

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/challenges/${id}`);
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

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error" sx={{ m: 2 }}>{error}</Alert>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {challenge && (
        <Card>
          <CardContent>
            <Chip label={challenge.category} color="secondary" sx={{ mb: 2 }} />
            <Typography variant="h2" gutterBottom>
              {challenge.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {challenge.description}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Detailed Problem Statement
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {challenge.detailedProblemStatement}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item>
                <Chip label={`Market Size: $${challenge.marketSize}B`} color="primary" />
              </Grid>
              <Grid item>
                <Chip label={`${challenge.solutions?.length || 0} Solutions Proposed`} color="secondary" />
              </Grid>
            </Grid>

            {/* Toggle Submission Form */}
            <Button
              variant="contained"
              startIcon={<Lightbulb />}
              onClick={() => setShowForm(!showForm)}
              sx={{ mt: 2 }}
            >
              {showForm ? 'Hide Submission Form' : 'Propose Your Solution'}
            </Button>

            {/* Show Submission Form if Button is Clicked */}
            {showForm && <SubmissionForm challengeId={challenge._id} />}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ChallengeDetail;
