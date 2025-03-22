const challengeRoutes = require('./routes/challengeRoutes');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const UserModel = require("./model/User");
const path = require('path');
const storyRoutes = require('./routes/storyRoutes');
const teamRoutes = require('./routes/teamRoutes');
const Challenge = require('./model/Challenge');
const Story = require('./model/Story');
require('./cron/dailyEmail');
const Team = require('./model/Team');
const {emailService} = require("./utils/emailService"); // Ensure the correct path
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    credentials: true
}));
app.use("/api/teams", teamRoutes);
app.use('/api/challenges', challengeRoutes);
// Add this before other routes
app.use('/api/stories', storyRoutes); // Base path for all story routes
app.get('/api/challenges/:id', async (req, res) => {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ error: 'Challenge not found' });
    res.json(challenge);
  });
  
  app.get('/api/stories/:id', async (req, res) => {
    const challenge = await Story.findById(req.params.id);
    if (!challenge) return res.status(404).json({ error: 'Challenge not found' });
    res.json(challenge);
  });
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure your EJS files are inside a 'views' folder

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,  // 🔹 Important: Only save sessions when needed
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false // 🔹 Change to `true` if using HTTPS
    }
}));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
  
//     socket.on('joinTeam', (teamId) => {
//       socket.join(teamId);
//     });
  
//     socket.on('chatMessage', (msg) => {
//       io.to(msg.teamId).emit('chatMessage', msg);
//     });
  
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });
// app.get('/', async (req, res) => {
//     try {
//       const teams = await Team.find();
//       res.status(200).json(teams);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch teams' });
//     }
//   });
  

//   const Team = require('./model/Team'); // Your Team model

  app.get('/api/teams', async (req, res) => {
      try {
          const teams = await Team.find();
          res.status(200).json(teams);
      } catch (error) {
          res.status(500).json({ message: 'Error retrieving teams', error });
      }
  });
  
  app.get('/api/teams/challenge/:challengeId', async (req, res) => {
    try {
      const teams = await Team.find({ challengeId: req.params.challengeId });
      res.json(teams);
    } catch (error) {
      console.error("Error fetching teams:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  

app.post('/api/teams', async (req, res) => {
    try {
      const { name, description, skillsNeeded, challengeId, inviteEmails} = req.body;
      if (!name || !challengeId) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const team = new Team({ name, description, skillsNeeded, challengeId, inviteEmails });
      await team.save();
      res.status(201).json(team);
    } catch (error) {
      console.error("Error creating team:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

app.get('/api/test-email', async (req, res) => {
    try {
      await emailService();
      res.json({ success: true, message: "Test email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

  app.get('/api/teams/challenge/:challengeId', async (req, res) => {
    const { challengeId } = req.params;
    console.log("Received Challenge ID:", challengeId); // Debugging
    const teams = await Team.find({ challenge: challengeId });
  
    if (!teams) {
      return res.status(404).json({ error: "No teams found for this challenge" });
    }
  
    res.json(teams);
  });
  
// Route for dashboard
app.get('/dashboard', async (req, res) => {
    try {
        const email = req.session.user?.email;
        if (!email) {
            return res.status(401).send("Unauthorized: No user session found");
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.render('dashboard', { user: { username: user.name, email: user.email, completedTasks: 10 } });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                req.session.user = { id: user._id, name: user.name, email: user.email };
                // console.log(email);
                console.log(user.name);
                res.json("Success");
            } else {
                res.status(401).json("Password doesn't match");
            }
        } else {
            res.status(404).json("No Records found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({ error: "Failed to logout" });
            } else {
                res.status(200).json("Logout successful");
            }
        });
    } else {
        res.status(400).json({ error: "No session found" });
    }
});

app.get('/user', (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json("Not authenticated");
    }
});


