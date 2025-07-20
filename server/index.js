const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const newMessage = { id: Date.now(), text: req.body.text };
  messages.push(newMessage);
  res.json(newMessage);
});

app.listen(PORT, () =>
  console.log(`Backend läuft auf http://localhost:${PORT}`)
);
