const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI;
const dbURI = `${process.env.MONGODB_URI}/userAuth`;
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

mongoose.connect(dbURI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid username or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid username or password');
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).send('Error logging in');
  }
});

// Get user route
app.get('/user/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).json({ username: user.username });
    } catch (error) {
      res.status(400).send('Error fetching user');
    }
  });

  app.get('/users', async (req, res) => {
    try {
      const users = await User.find({}, 'username');
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send('Error fetching users');
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
