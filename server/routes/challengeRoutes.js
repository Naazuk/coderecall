const express = require('express');
const router = express.Router();
const Challenge = require('../model/Challenge'); // Adjust the path if needed
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

// router.get('/:id', getChallengeById);

module.exports = router;
