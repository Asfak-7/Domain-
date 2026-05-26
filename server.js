
const express = require('express');
const app = express();

app.use(express.static('public'));

const users = {
  jimmy: {
    bio: "Welcome to Jimmy's page!"
  }
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/profile/:username', (req, res) => {
  const user = users[req.params.username];

  if (!user) {
    return res.send('User not found');
  }

  res.send(`
    <h1>${req.params.username}</h1>
    <p>${user.bio}</p>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
