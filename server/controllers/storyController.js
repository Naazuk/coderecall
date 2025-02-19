const Story = require('../model/Story');
const Subscriber = require('../model/Subscriber');
exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Store the email in the database (example with Mongoose)
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.json({ message: "Subscribed successfully! 🎉" });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.getDailyStory = async (req, res) => {
  try {
    const today = new Date().setHours(0,0,0,0);
    const story = await Story.findOne({ 
      storyDate: { 
        $gte: today,
        $lt: new Date(today + 86400000)
      }
    });
    res.json(story);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};