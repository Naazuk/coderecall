require("dotenv").config();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Story = require("../model/Story");
const Subscriber = require("../model/Subscriber");
const cron = require("node-cron");

// Fetch subscribers
const getSubscribers = async () => {
  return await Subscriber.find({}, "email");
};

// Fetch the latest unsent story
const getLatestStory = async () => {
  const story = await Story.findOne({ emailSent: false })
    .sort({ storyDate: -1 })
    .exec();
  console.log("Fetched story:", story);
  return story;
};

// Send weekly email
const emailService = async () => {
  try {
    const subscribers = await getSubscribers();
    if (subscribers.length === 0) {
      console.log("❌ No subscribers found.");
      return;
    }

    const startupStory = await getLatestStory();
    if (!startupStory) {
      console.log("❌ No new startup stories to send.", new Date());
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    for (const subscriber of subscribers) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: subscriber.email,
        subject: `🚀 Weekly Startup Story: ${startupStory.title}`,
        html: `<h2>${startupStory.title}</h2>
               <p>${startupStory.content}</p>
               <p><a href="${startupStory.link}">Read more</a></p>`,
      });
      console.log(`✅ Email sent to: ${subscriber.email}`);
    }

    // Mark story as sent
    await Story.updateOne({ _id: startupStory._id }, { $set: { emailSent: true } });
    console.log("✅ Weekly emails sent successfully!");
  } catch (error) {
    console.error("❌ Error sending weekly email:", error);
  }
};

console.log("🚀 Email service running...");

// const createTeam = async (req, res) => {
//   try {
//     const { name, description, skillsNeeded, challengeId, inviteEmails } = req.body;

//     console.log("🚀 Creating team with:", { name, description, skillsNeeded, challengeId, inviteEmails });

//     if (!name || !description || !skillsNeeded || !challengeId) {
//       console.log("❌ Missing required fields.");
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Create the team in the database
//     const newTeam = await Team.create({
//       name,
//       description,
//       skillsNeeded,
//       challengeId,
//       inviteEmails,
//     });

//     console.log("✅ Team created successfully:", newTeam);

//     // Send invitations
//     if (inviteEmails && inviteEmails.length > 0) {
//       console.log("📨 Inviting members...");
//       await sendInvitationEmails(inviteEmails, newTeam);
//     } else {
//       console.log("❌ No invite emails provided.");
//     }

//     res.status(201).json(newTeam);
//   } catch (error) {
//     console.error("❌ Error creating team or sending invitations:", error);
//     res.status(500).json({ message: "Failed to create team or send invitations." });
//   }
// };


// const sendInvitationEmails = async (emails, team) => {
//   console.log("📨 Sending invitations to:", emails);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   for (const email of emails) {
//     try {
//       const info = await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: `You have been invited to join ${team.name}!`,
//         text: `Hello! You have been invited to join the team "${team.name}".`,
//       });

//       console.log(`✅ Invitation sent to: ${email} (${info.response})`);
//     } catch (error) {
//       console.error(`❌ Failed to send email to ${email}:`, error);
//     }
//   }
// };


// console.log("🚀 inviation is sending...");

// Schedule emails every Monday at 9 AM
cron.schedule("0 9 * * 1", () => {
  console.log("⏰ Running weekly email job...");
  emailService();
  // createTeam();
});
