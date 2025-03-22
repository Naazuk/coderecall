import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import axios from "axios";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/stories/subscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Display success message directly from backend response
      setMessage(response.data.message || "Subscribed successfully!");
      setIsError(false);
      setEmail(""); // Clear email input after success
    } catch (error) {
      // Handle errors properly
      const errorMessage =
        error.response?.data?.error || "Subscription failed. Please try again.";
      setMessage(errorMessage);
      setIsError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubscribe} sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Get Daily Startup Stories in Your Inbox
      </Typography>

      <TextField
        label="Your best email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: 300, mr: 2 }}
      />

      <Button type="submit" variant="contained" color="primary" size="large">
        Subscribe
      </Button>

      {message && (
        <Alert severity={isError ? "error" : "success"} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default SubscribeForm;
