app.post("/api/teams", async (req, res) => {
    try {
        console.log("Received request:", req.body); // ✅ Check if data is received
        const { name, description, skillsNeeded, challengeId } = req.body;

        if (!name || !description || !challengeId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newTeam = new Team({
            name,
            description,
            skillsNeeded,
            challengeId,
            members: [], // Initialize an empty array of members
        });
            await newTeam.save();
            console.log('Team saved to database:', newTeam);
            res.status(201).json(newTeam);
          } catch (error) {
            console.error('Error saving team:', error);
            res.status(500).json({ error: "Failed to save team: " + error.message });
          }
});