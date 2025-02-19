const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: String,
    enum: ['Climate', 'Healthcare', 'Education'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  problemStatement: { type: String, required: true },
  starterCodeRepo: { type: String },
  submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }]
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
