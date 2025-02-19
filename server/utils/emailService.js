const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendDailyStoryEmail = async (story) => {
  const subscribers = await Subscriber.find();
  
  const mailOptions = {
    from: 'InspireDaily <stories@yourdomain.com>',
    subject: `Today's Startup Story: ${story.title}`,
    html: `
      <h2>${story.title}</h2>
      <img src="${story.featuredImage}" alt="${story.company}" width="400">
      <p>${story.content.substring(0, 200)}...</p>
      <blockquote>"${story.quote}" - ${story.founder}</blockquote>
      <a href="https://localhost:3000/stories/daily">Read Full Story</a>
    `
  };

  subscribers.forEach(async (subscriber) => {
    await transporter.sendMail({ 
      ...mailOptions,
      to: subscriber.email
    });
  });
};