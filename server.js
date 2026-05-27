const express = require("express");
const app = express();

const users = {
  jimmy: {
    bio: "Welcome to Jimmy's page",
    link: "https://asfak.onrender.com/"
  },

  shop: {
    bio: "Welcome to Shop page",
    link: "https://asfak.onrender.com/"
  }
};

app.get("/:username", (req, res) => {
  const username = req.params.username;

  if (!users[username]) {
    return res.send("User not found");
  }

  const user = users[username];

  // Automatically open/redirect to website
  res.redirect(user.link);
});

app.get("/", (req, res) => {
  res.send("Subdomain platform running 😄");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
