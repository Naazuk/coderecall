import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from "axios";

const TeamUpModal = ({ challengeId, open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    skillsNeeded: [],
    inviteEmails: "",
  });

  useEffect(() => {
    if (open && challengeId) {
      setLoading(true);
      axios
        .get(`http://localhost:3001/api/teams/challenge/${challengeId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => setTeams(res.data))
        .catch(() => setError("Failed to fetch teams."))
        .finally(() => setLoading(false));
    }
  }, [open, challengeId]);

  const handleCreateTeam = async () => {
    const rawToken = localStorage.getItem("token");

    if (!rawToken) {
      alert("You are not logged in. Please log in again.");
      return;
    }

    const tokenData = JSON.parse(atob(rawToken.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

    if (tokenData.exp < currentTime) {
      alert("Your session has expired. Please log in again.");
      return;
    }

    const payload = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      skillsNeeded: formData.skillsNeeded,
      challengeId: challengeId,
      inviteEmails: formData.inviteEmails.split(",").map((email) => email.trim()),
    };

    console.log("📝 Sending API Request with Payload:", payload);
    console.log("🔑 Token:", rawToken);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/api/teams", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rawToken}`,
        },
      });

      // const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

      // if (token.exp < currentTime) {
      //   console.log("Token has expired!");
      // } else {
      //   console.log("Token is still valid.");
      // }

      console.log("✅ Team Created Successfully:", response.data);
      setTeams((prevTeams) => [...prevTeams, response.data]);
      alert("Team created successfully!");
      onClose();
    } catch (error) {
      console.error("❌ Error Response:", error.response);
      console.error("❌ Error Message:", error.message);

      if (error.response) {
        setError(error.response.data?.message || "Server Error: Could not create team.");
      } else if (error.request) {
        setError("No response from server. Please check your network.");
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Team Up for Challenge</DialogTitle>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Join Existing Team" />
        <Tab label="Create New Team" />
      </Tabs>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        {loading ? (
          <CircularProgress />
        ) : tabValue === 0 ? (
          teams.length > 0 ? (
            teams.map((team) => <div key={team._id}>{team.name}</div>)
          ) : (
            <p>No teams found for this challenge.</p>
          )
        ) : (
          <>
            <TextField
              label="Team Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Description"
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Skills Needed (comma separated)"
              value={formData.skillsNeeded.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skillsNeeded: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              fullWidth
            />
            <TextField
              label="Invite Members (comma separated emails)"
              value={formData.inviteEmails}
              onChange={(e) =>
                setFormData({ ...formData, inviteEmails: e.target.value })
              }
              fullWidth
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {tabValue === 1 && (
          <Button
            variant="contained"
            onClick={handleCreateTeam}
            disabled={
              !formData.name.trim() ||
              !formData.description.trim() ||
              !formData.inviteEmails.trim() ||
              loading
            }
          >
            {loading ? <CircularProgress size={24} /> : "Create Team & Send Invites"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default TeamUpModal;
















// import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Tabs,
//   Tab,
//   TextField,
//   Button,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import axios from "axios";

// const TeamUpModal = ({ challengeId, open, onClose }) => {
//   const [tabValue, setTabValue] = useState(0);
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     skillsNeeded: [],
//     inviteEmails: "",
//   });

//   useEffect(() => {
//     if (open && challengeId) {
//       setLoading(true);
//       axios
//         .get(`http://localhost:3001/api/teams/challenge/${challengeId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         })
//         .then((res) => setTeams(res.data))
//         .catch(() => setError("Failed to fetch teams."))
//         .finally(() => setLoading(false));
//     }
//   }, [open, challengeId]);

//   const handleCreateTeam = async () => {
//     const token = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
//     // const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not logged in. Please log in again.");
//       return;
//     }

//     const payload = {
//       name: formData.name.trim(),
//       description: formData.description.trim(),
//       skillsNeeded: formData.skillsNeeded,
//       challengeId: challengeId,
//       inviteEmails: formData.inviteEmails.split(",").map((email) => email.trim()),
//     };

//     console.log("📝 Sending API Request with Payload:", payload);
//     console.log("🔑 Token:", token);

//     try {
//       setLoading(true);
//       const response = await axios.post("http://localhost:3001/api/teams", payload, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

//       if (token.exp < currentTime) {
//         console.log("Token has expired!");
//       } else {
//         console.log("Token is still valid.");
//       }

//       console.log("✅ Team Created Successfully:", response.data);
//       setTeams((prevTeams) => [...prevTeams, response.data]);
//       alert("Team created successfully!");
//       onClose();
//     } catch (error) {
//       console.error("❌ Error Response:", error.response);
//       console.error("❌ Error Message:", error.message);

//       if (error.response) {
//         setError(error.response.data?.message || "Server Error: Could not create team.");
//       } else if (error.request) {
//         setError("No response from server. Please check your network.");
//       } else {
//         setError("Unexpected error occurred.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//       <DialogTitle>Team Up for Challenge</DialogTitle>
//       <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
//         <Tab label="Join Existing Team" />
//         <Tab label="Create New Team" />
//       </Tabs>
//       <DialogContent>
//         {error && <Alert severity="error">{error}</Alert>}
//         {loading ? (
//           <CircularProgress />
//         ) : tabValue === 0 ? (
//           teams.length > 0 ? (
//             teams.map((team) => <div key={team._id}>{team.name}</div>)
//           ) : (
//             <p>No teams found for this challenge.</p>
//           )
//         ) : (
//           <>
//             <TextField
//               label="Team Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               fullWidth
//             />
//             <TextField
//               label="Description"
//               multiline
//               rows={3}
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({ ...formData, description: e.target.value })
//               }
//               fullWidth
//             />
//             <TextField
//               label="Skills Needed (comma separated)"
//               value={formData.skillsNeeded.join(", ")}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   skillsNeeded: e.target.value.split(",").map((s) => s.trim()),
//                 })
//               }
//               fullWidth
//             />
//             <TextField
//               label="Invite Members (comma separated emails)"
//               value={formData.inviteEmails}
//               onChange={(e) =>
//                 setFormData({ ...formData, inviteEmails: e.target.value })
//               }
//               fullWidth
//             />
//           </>
//         )}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         {tabValue === 1 && (
//           <Button
//             variant="contained"
//             onClick={handleCreateTeam}
//             disabled={
//               !formData.name.trim() ||
//               !formData.description.trim() ||
//               !formData.inviteEmails.trim() ||
//               loading
//             }
//           >
//             {loading ? <CircularProgress size={24} /> : "Create Team & Send Invites"}
//           </Button>
//         )}
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default TeamUpModal;

