// // const mongoose = require('mongoose');
// // const subscriberSchema = new mongoose.Schema({
// //     email: { 
// //       type: String, 
// //       required: true,
// //       unique: true,
// //       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
// //     },
// //     subscribedAt: { type: Date, default: Date.now }
// //   });
// const mongoose = require('mongoose');

// const subscriberSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true }
// });

// module.exports = mongoose.model('Subscriber', subscriberSchema);

const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email validation
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);