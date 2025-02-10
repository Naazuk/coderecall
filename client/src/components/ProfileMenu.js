import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function ProfileMenu({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
        handleMenuClose();
    };

    const handleProfile = () => {
        navigate("/dashboard");  // Navigates to the dashboard
        handleMenuClose();
    };

    const handleBadges = () => {
        navigate("/badges");
        handleMenuClose();
    };

    return (
        <div>
            <IconButton onClick={handleMenuOpen} size="large" sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>U</Avatar> {/* Replace 'U' with user initial or image */}
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleBadges}>Badges Earned</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default ProfileMenu;
