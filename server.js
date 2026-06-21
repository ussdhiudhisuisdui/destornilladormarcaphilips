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

    <meta property="og:title" content="my lovely little webserver" />
    <meta property="og:description" content="no noobs allowed!" />
    <meta property="og:image" content="https://raw.githubusercontent.com/ussdhiudhisuisdui/destornilladormarcaphilips/refs/heads/main/csgoi.png" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#00a8fc" />
    <meta name="twitter:card" content="summary_large_image" />

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


// Roblox reads this
app.get("/latest", (req, res) => {
    res.json(latest);
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
