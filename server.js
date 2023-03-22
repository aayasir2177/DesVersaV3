const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Static Files Access
app.use("/static", express.static(path.join(__dirname, "public")));

// Routings
app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("^/$|about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("^/$|ebook-service(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ebook-service.html"));
});
app.get("^/$|brand-service(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "brand-service.html"));
});
app.get("^/$|website-service(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "website-service.html"));
});

app.get("^/$|portfolio(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "portfolio.html"));
});
app.get("^/$|contact(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

// Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
