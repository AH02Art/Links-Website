const images = document.getElementsByClassName("test-image");
console.log("images =>", images);

for (const index of images) {
    index.addEventListener("click", function(event) {
        console.log("test");
    })
}

const items = [
    "images",
    "icons",
    "videos",
    "other stuff"
];

import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;
const STEAM_API_KEY = "YOUR_STEAM_API_KEY";

app.get("/steam/:id", async (req, res) => {
  const steamId = req.params.id;
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${STEAM_API_KEY}&steamids=${steamId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.response.players[0]); // send only the player data
  } catch (error) {
    res.status(500).json({ error: "Error fetching Steam data" });
  }
});

document
  .getElementById("discord-connect")
  .addEventListener("click", () => {
    console.log("Discord connect clicked");
  });

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));