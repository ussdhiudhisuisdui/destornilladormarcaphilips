const express = require("express");
const app = express();
app.use(express.json({ limit: '50mb' }));

let latest = { S: "", U: "" };

app.post("/submit", (req, res) => {
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
<head><title>Status</title></head>
<body style="background:#111;color:#0f0;font-family:monospace;text-align:center;padding-top:100px;">
    <h1 style="font-size:70px;">NOTHING TO SEE HERE...</h1>
    <p>boring service • move along</p>
    <br><br><br><br><br><br><br><br><br><br>
    <span style="color:#222;font-size:9px;">v2026</span>
</body></html>`);
});

app.listen(process.env.PORT || 3000, () => console.log("LIVE"));