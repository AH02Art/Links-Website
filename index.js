const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname)));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT, () => {
    console.log(`*** App is live on: localhost:${PORT} ***`);
});