import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome back:)");
});

app.listen(3000);