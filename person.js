const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Check if the number is exactly 10 characters long
        return value.length === 10;
      },
      message: 'Phone number must be exactly 10 characters long'
    }
  }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
