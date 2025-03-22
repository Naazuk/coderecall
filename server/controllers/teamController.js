// export const createTeam = async (req, res) => {
  //     try {
    //       const { name, description, skillsNeeded, challengeId, inviteEmails } = req.body;
    
    //       if (!name || !challengeId) {
      //         return res.status(400).json({ message: "Name and challengeId are required" });
      //       }
      
      //       const team = new Team({
        //         name,
        //         description,
        //         skillsNeeded: skillsNeeded || [],
        //         challengeId,
        //         members: [req.user.id],
        //         inviteEmails  // Add current user as member
        //       });
        
        //       await team.save();
        
        //       // Populate members with just name
        //       const populatedTeam = await Team.findById(team._id)
        //         .populate('members', 'name');
        
        //       res.status(201).json(populatedTeam);
        //     } catch (error) {
          //       res.status(500).json({ message: error.message });
          //     }
          //   };
          
          
// import Team from "../model/Team";
const Team = require('../model/Team');
const nodemailer = require("nodemailer");


const createTeam = async (req, res) => {
  console.log("🚀 createTeam function called!");
  console.log("📌 Request body:", req.body);

  try {
    const { name, description, skillsNeeded, challengeId, inviteEmails } = req.body;

    if (!name || !description || !skillsNeeded || !challengeId) {
      console.log("❌ Missing required fields.");
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTeam = new Team({
      name,
      description,
      skillsNeeded,
      challengeId,
      inviteEmails,
    });

    await newTeam.save();
    console.log("✅ Team saved to MongoDB:", newTeam);

    res.status(201).json(newTeam);
  } catch (error) {
    console.error("❌ Error in createTeam:", error);
    res.status(500).json({ message: "Failed to create team." });
  }
};


const sendInvitationEmails = async (emails, team) => {
  console.log("📨 Sending invitations to:", emails);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  for (const email of emails) {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `You have been invited to join ${team.name}!`,
        text: `Hello! You have been invited to join the team "${team.name}".`,
      });

      console.log(`✅ Invitation sent to: ${email} (${info.response})`);
    } catch (error) {
      console.error(`❌ Failed to send email to ${email}:`, error);
    }
  }
};


console.log("🚀 inviation is sending!!!!!!!!!");
module.exports = {createTeam , sendInvitationEmails};
// const Team = require("../model/Team");

// const createTeam = async (req, res) => {
//   try {
//     const { name, description, skillsNeeded, challengeId, inviteEmails } = req.body;

//     // Create the team in the database
//     const newTeam = await Team.create({
//       name,
//       description,
//       skillsNeeded,
//       challengeId,
//       inviteEmails,
//     });

//     // Send invitations
//     if (inviteEmails && inviteEmails.length > 0) {
//       await sendInvitationEmails(inviteEmails, newTeam);
//     }

//     res.status(201).json(newTeam);
//   } catch (error) {
//     console.error("Error creating team or sending invitations:", error);
//     res.status(500).json({ message: "Failed to create team or send invitations." });
//   }
// };

// const sendInvitationEmails = async (emails, team) => {
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
//         subject: `You're Invited to Join Team "${team.name}"`,
//         html: `
//           <h2>You've been invited to join the team: ${team.name}!</h2>
//           <p>${team.description}</p>
//           <p>Skills Needed: ${team.skillsNeeded.join(", ")}</p>
//           <p>Click <a href="http://localhost:3000/join-team/${team._id}">here</a> to join the team.</p>
//         `,
//       });
    
//       console.log(`✅ Invitation sent to: ${email} (${info.response})`);
//     } catch (error) {
//       console.error(`❌ Failed to send email to ${email}:`, error);
//     }
    
//   }
// };


// module.exports = { createTeam };
