// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// const Signup = require('./src/pages/SignupPage');

// app.use(cors({
//   origin: 'http://localhost:3000' // Replace with your frontend's URL
// }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect(process.env.MongoDb_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err); // Detailed error logging
//     process.exit(1); // Exit the process if unable to connect to the database
//   });

// // Define the user schema and model
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Ensure emails are unique
//   },
//   password: {
//     type: String,
//     required: true,
//   }
// });

// const User = mongoose.model('User', userSchema);
// app.get('/', (req, res) => {
//   res.send('Welcome to the backend!');
// });

// // Signup route
// app.post('/signup', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = new Signup({ username, email, password });
//     await newUser.save();
//     req.session.user = newUser;
//     res.status(201).json({ email: newUser.email });
//   } catch (error) {
//     console.error('Error signing up user:', error);
//     res.status(400).json({ error: 'Error signing up user: ' + error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
// const openai = require('openai');

const app = express();
const Signup = require('./models/signup');
const Query = require('./models/query');

const PORT = process.env.PORT || 5500;
const MongoDbURI = process.env.MongoDb_URI;


// OpenAI Configuration
// const openaiInstance = new openai.OpenAI(process.env.OPENAI_API_KEY); 


// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MongoDbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  // Route to render the home.ejs file
  app.get('/profile', (req, res) => {
    res.render('home');  // This renders 'views/home.ejs'
  });

// Serve static files
app.use(express.static(path.resolve(__dirname, '../uploads')));

// Set up session middleware
app.use(session({
    secret: 'your_secret_key', // Replace with a secure key for production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
  

// Define route to handle requests for session information
app.get('/session-info', (req, res) => {
    if (req.session && req.session.user) {
      res.status(200).json(req.session.user);
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  });
  

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    res.status(401).json({ error: 'Not authenticated' });
  };

// Routes
app.get('/home', isAuthenticated, async (req, res) => {
  const userEmail = req.session.user.email; // Use session to get user email
  try {
    const user = await Signup.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.render('home', { user });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new Signup({ username, email, password });
    await newUser.save();
    req.session.user = newUser;
    res.status(201).json({ email: newUser.email });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(400).json({ error: 'Error signing up user: ' + error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    req.session.user = user; // Set user session
    res.status(200).json({ email: user.email });
  } catch (error) {
    res.status(400).json({ error: 'Error logging in user: ' + error.message });
  }
});

app.get('/check-session', (req, res) => {
  if (req.session && req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

// Example of a protected route
app.get('/some-protected-route', isAuthenticated, (req, res) => {
    res.send('This is a protected route');
  });
  
  // Middleware to check if user is authenticated
 
  
// Fetch all queries
app.get('/queries', async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Post a new query
app.post('/queries', async (req, res) => {
  try {
    const { username, email, query } = req.body;
    const newQuery = new Query({ username, email, query });
    await newQuery.save();
    res.status(201).json(newQuery);
  } catch (error) {
    res.status(400).json({ error: 'Error posting query: ' + error.message });
  }
});

// Delete a query
app.delete('/queries/:id', async (req, res) => {
  try {
    const queryId = req.params.id;
    const query = await Query.findById(queryId);

    if (!query) {
      return res.status(404).json({ error: 'Query not found' });
    }

    const now = new Date();
    const createdAt = new Date(query.createdAt);
    const diffTime = Math.abs(now - createdAt);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffHours > 24) {
      return res.status(400).json({ error: 'Cannot delete query after 24 hours' });
    }

    await Query.findByIdAndDelete(queryId);
    res.status(200).json({ message: 'Query deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// AI response endpoint
// app.post('/ai-response', async (req, res) => {
//     try {
//       const { query } = req.body;
//       const response = await openaiInstance.createCompletion({
//         model: 'text-davinci-003',
//         prompt: query,
//         max_tokens: 150,
//       });
//       res.json({ response: response.data.choices[0].text.trim() });
//     } catch (error) {
//       console.error('Error getting AI response:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// Catch-all route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
