// const express = require('express');
// const router = express.Router();
// const {
//   createStory,
//   getDailyStory,
//   subscribeEmail
// } = require('../controllers/storyController');
// const authMiddleware = require('../middleware/authMiddleware');

// // Admin route to post story
// router.post('/', authMiddleware, createStory);

// // Public routes
// router.get('/daily', getDailyStory);
// router.post('/subscribe', subscribeEmail);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Story = require('../model/Story'); // Adjust the path if needed
const { subscribeEmail } = require('../controllers/storyController');


router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Email subscription endpoint
router.post('/subscribe', subscribeEmail);

module.exports = router;
