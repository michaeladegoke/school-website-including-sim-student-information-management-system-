const express = require("express");
const path = require("path");
const db = require("./config/db");

const app = express();
const PORT = 3000;

// THIS IS VERY IMPORTANT
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/school", (req, res) => {

    const slogans = [
        "The Glory of Obedient Child",
        "Education is Power",
        "Learning Never Ends",
        "Discipline Builds Success"
    ];

    const descriptions = [
        "Learning is not attained by chance...",
        "Education shapes character and future...",
        "Every child has the potential to succeed..."
    ];

    const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
    const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];

    res.json({
        school_name: "Courage Group of School",
        slogan: randomSlogan,
        description: randomDesc
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
