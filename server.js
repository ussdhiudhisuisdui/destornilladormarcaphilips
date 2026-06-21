const express = require("express");
const app = express();
app.use(express.json({ limit: '50mb' }));

let latest = { S: "", U: "" };

app.post("/EXCUSEMESAAR", (req, res) => {
    const text = String(req.body.text || "").trim();
    const user = String(req.body.user || "").trim();
    latest = { S: text, U: user };
    console.log(`^S: "${text.slice(0,80)}..." U: "${user}"^`);
    res.json({ success: true });
});

app.get("/latest", (req, res) => res.json(latest));

app.all("/latest", (req, res) => {
    if (req.method !== "GET") res.status(405).send("no");
});

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>Status</title>
</head>
<body style="text-align:center; margin-top:100px; font-family:Georgia, serif;">
    <h1>ge tout noob</h1>
    <p>only pro gamers are allowed here</p>
</body>
</html>`);
});

app.listen(process.env.PORT || 3000, () => console.log("LIVE"));
