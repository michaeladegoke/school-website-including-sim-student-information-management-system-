const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Homepage
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// API ROUTE (THIS IS WHAT YOU ARE MISSING)
app.get("/api/school", (req, res) => {
    res.json({
        school_name: "Courage Group of School",
        slogan: "The Glory of Obedient Child",
        description: "Learning is not attained by chance, it must be sought with diligence."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});