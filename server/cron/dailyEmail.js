// const cron = require('node-cron');
// const Story = require('../model/Story');
// const { sendDailyStoryEmail } = require('../utils/emailService');

// cron.schedule('0 9 * * *', async () => {
//   const today = new Date().setHours(0,0,0,0);
  
//   const story = await Story.findOneAndUpdate(
//     { storyDate: { $gte: today }, emailSent: false },
//     { $set: { emailSent: true }},
//     { new: true }
//   );

//   if(story) await sendDailyStoryEmail(story);
// });
// const cron = require('node-cron');

// // Schedule emails every Monday at 9 AM
// cron.schedule('0 9 * * 1', () => { // Runs at 09:00 AM every Monday
//   console.log('⏰ Running weekly email job...');
//   emailService();
// });