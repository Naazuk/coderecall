import React from "react";

function Dashboard() {
    return (
        <div style={{ height: "100vh" }}>
            <iframe 
                src="http://localhost:3001/dashboard" 
                title="Dashboard"
                style={{ width: "100%", height: "100%", border: "none" }}
            />
        </div>
    );
}

export default Dashboard;
