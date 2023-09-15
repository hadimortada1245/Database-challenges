const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
mongoose.connect('mongodb+srv://hadimortada1245:LmIYlYUu3v8PAb5G@cluster0.708wnhp.mongodb.net/Hadi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model('User', {
  username: String,
  email: String,
  age: Number,
});
app.use(bodyParser.json());
const sampleUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
});

sampleUser.save((err) => {
  if (err) {
    console.error('Error saving sample user:', err);
  }
});

// Fetch all user data
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

