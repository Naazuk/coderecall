const cron = require('node-cron');
const Story = require('../model/Story');
const { sendDailyStoryEmail } = require('../utils/emailService');

cron.schedule('0 9 * * *', async () => {
  const today = new Date().setHours(0,0,0,0);
  
  const story = await Story.findOneAndUpdate(
    { storyDate: { $gte: today }, emailSent: false },
    { $set: { emailSent: true }},
    { new: true }
  );

  if(story) await sendDailyStoryEmail(story);
});