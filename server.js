const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));

let latest = {
    S: "",
    U: ""
};

app.post("/EXCUSEMESAAR", (req, res) => {
    console.log("POST RECEIVED:");
    console.log(req.body);

    latest.S = String(req.body.text || "");
    latest.U = String(req.body.user || "");

    console.log("UPDATED:");
    console.log(latest);

    res.send("received");
});

app.get("/latest", (req, res) => {
    res.json(latest);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
