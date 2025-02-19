const Challenge = require('../model/Challenge');

// Create Challenge
exports.createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge({
      ...req.body,
      createdBy: req.user.id
    });
    await challenge.save();
    res.status(201).json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Challenges
exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find().populate('submissions');
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get Single Challenge
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id)
      .populate('submissions')
      .populate('createdBy', 'name email');
      
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Submit Solution
exports.submitSolution = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    const submission = {
      user: req.user.id,
      repoUrl: req.body.repoUrl,
      liveUrl: req.body.liveUrl,
      description: req.body.description
    };

    challenge.submissions.push(submission);
    await challenge.save();
    
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};