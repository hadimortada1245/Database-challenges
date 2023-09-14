const express= require('express');
const mongoose=require('mongoose');
const app =express();
const PORT = 5000;
mongoose.connect('mongodb+srv://hadimortada1245:LmIYlYUu3v8PAb5G@cluster0.708wnhp.mongodb.net/firstone');
app.get('/api', (req, res) => {
    res.send('Welcome to the API!');
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
