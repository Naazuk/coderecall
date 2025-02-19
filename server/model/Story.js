const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  founder: { type: String, required: true },
  company: { type: String, required: true },
  category: { 
    type: String,
    enum: ['Tech', 'Social Impact', 'E-commerce', 'Health', 'Finance']
  },
  featuredImage: { type: String },
  quote: { type: String }, // Founder's inspirational quote
  storyDate: { type: Date, default: Date.now },
  emailSent: { type: Boolean, default: false }
});

module.exports = mongoose.model('Story', storySchema);