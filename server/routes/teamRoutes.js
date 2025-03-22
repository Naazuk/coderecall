const express = require('express');
const {createTeam} = require('../controllers/teamController.js');
// import { createTeam } from '../controllers/teamController.js';
const authMiddleware = require('../middleware/authMiddleware.js');
const mongoose = require('mongoose');
// import authMiddleware from '../middleware/authMiddleware.js';
const Team = require('../model/Team.js');
// import Team from '../model/Team.js'; // Ensure you import your Team model
const User = require("../model/User.js"); 

const router = express.Router();

// Create team for a challenge
// router.post("/create-team", createTeam);
router.post('/', authMiddleware, createTeam);

// Join existing team
router.post('/:id/join', authMiddleware, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    if (team.members.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already in team' });
    }
    
    team.members.push(req.user.id);
    await team.save();
    res.json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/challenge/:challengeId', async (req, res) => {
  try {
    const challengeId = req.params.challengeId;

    // Convert challengeId to ObjectId
    const objectIdChallengeId = new mongoose.Types.ObjectId(challengeId);

    const teams = await Team.find({ challengeId: objectIdChallengeId })
      .populate('members','name');

    if (teams.length === 0) {
      return res.status(404).json({ message: "No teams found for this challenge." });
    }

    res.json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error.message);
    res.status(500).json({ message: "Failed to fetch teams for this challenge." });
  }
});

module.exports= router;