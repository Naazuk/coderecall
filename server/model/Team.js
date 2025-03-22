const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  skillsNeeded: [String],
  challengeId: { type: mongoose.Schema.Types.String, ref: 'Challenge', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  inviteEmails: {
    type: Array,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email validation
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Team', teamSchema);

// const mongoose = require("mongoose");
// const TeamSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   skillsNeeded: { type: [String], required: true },
//   challengeId: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" }
// });

// module.exports = mongoose.model("Team", TeamSchema);
