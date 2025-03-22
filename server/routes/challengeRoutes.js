const express = require('express');
const router = express.Router();
const Challenge = require('../model/Challenge'); // Adjust the path if needed
const Submission = require('../model/Submission'); // Create this model for solutions
// const getChallengeById = require('../controllers/challengeController')
router.get('/', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// Submit a solution
router.post('/:id/submit', async (req, res) => {
  const { id } = req.params;
  const { repoUrl, liveUrl, description } = req.body;

  if (!repoUrl || !description) {
    return res.status(400).json({ message: 'Repository URL and description are required' });
  }

  try {
    const challenge = await Challenge.findById(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    const submission = new Submission({
      challengeId: id,
      repoUrl,
      liveUrl,
      description,
      submittedAt: new Date()
    });

    await submission.save();
    
    res.status(201).json({ message: 'Solution submitted successfully', submission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});
// router.get('/:id', getChallengeById);

module.exports = router;
