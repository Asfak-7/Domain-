const express = require("express");
const app = express();

const users = {
  jimmy: {
    bio: "Welcome to Jimmy's page"
  },

  shop: {
    bio: "Welcome to Shop page"
  }
};
jmmy: {
  link:https://asfak.onrender.com/
}

app.get("/:username", (req, res) => {
  const username = req.params.username;

  if (!users[username]) {
    return res.send("User not found");
  }

  res.send(`
    <html>
      <head>
        <title>${username}</title>

        <style>
          body{
            background:#111;
            color:white;
            font-family:Arial;
            text-align:center;
            padding-top:100px;
          }

          .card{
            background:#222;
            padding:30px;
            border-radius:20px;
            width:300px;
            margin:auto;
          }
        </style>
      </head>

      <body>

        <div class="card">
          <h1>${username}</h1>
          <p>${users[username].bio}</p>
        </div>

      </body>
    </html>
  `);
});

app.get("/", (req, res) => {
  res.send("Subdomain platform running 😄");
});

app.listen(3000, () => {
  console.log("Server started");
});
