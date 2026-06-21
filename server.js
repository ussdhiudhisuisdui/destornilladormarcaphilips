const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));

let latest = {
    S: "",
    U: ""
};

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>4b5g</title>

    <meta property="og:title" content="4b5g">
    <meta property="og:description" content="no noobs allowed!">
    <meta property="og:image" content="https://images.steamusercontent.com/ugc/54715116253496175/BF639BCE9BC61E0D6B919EFCC11C4129399F2513/">
    <meta property="og:type" content="website">

    <style>
        body {
            background: #111;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
        }

        h1 {
            font-size: 70px;
            margin-bottom: 10px;
        }

        p {
            font-size: 20px;
            color: #aaa;
        }
    </style>
</head>

<body>
    <h1>get out noob</h1>
    <p>only pro gamers are allowed here</p>
</body>
</html>
    `);
});


app.post("/EXCUSEMESAAR", (req, res) => {
    latest = {
        S: String(req.body.text || ""),
        U: String(req.body.user || "")
    };

    console.log("Updated:", latest);

    res.send("ok");
});


app.get("/latest", (req, res) => {
    res.json(latest);
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
