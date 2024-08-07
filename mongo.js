const mongoose = require('mongoose');

const url = `mongodb+srv://ilikemexd6342:LGELcStuL6c6eaeB@cluster0.kpvylrd.mongodb.net/Phonebook?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB server'); 
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;
