const express = require('express');
const app = express();
require('./mongo');  // This connects to MongoDB
const Person = require('./person');  // This imports the Person model
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// GET persons from MongoDB
app.get('/api/persons', async (req, res, next) => {
  try {
    const persons = await Person.find({});
    res.json(persons);
    console.log(persons);
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Get info
app.get('/api/info', async (req, res, next) => {
  try {
    const now = new Date();
    const currentTime = now.toLocaleString();
    const count = await Person.countDocuments({});
    const responseText = `Phonebook has info for ${count} people\n${currentTime}`;
    res.send(responseText);
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Get person by ID
app.get('/api/persons/:id', async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Delete person by ID
app.delete('/api/persons/:id', async (req, res, next) => {
  try {
    await Person.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Add new person
app.post('/api/persons', async (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    });
  }

  try {
    // Check for existing person with the same name
    const existingPersonByName = await Person.findOne({ name: body.name });
    if (existingPersonByName) {
      return res.status(400).json({
        error: 'name must be unique'
      });
    }

    // Check for existing person with the same number
    const existingPersonByNumber = await Person.findOne({ number: body.number });
    if (existingPersonByNumber) {
      return res.status(400).json({
        error: 'number must be unique'
      });
    }

    // If no duplicates, create and save the new person
    const person = new Person({
      name: body.name,
      number: body.number
    });

    const savedPerson = await person.save();
    res.json(savedPerson);
    
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Update phone number of an existing person by ID
app.put('/api/persons/:id', async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  if (!body.number) {
    return res.status(400).json({ error: 'number is missing' });
  }

  try {
    // Find the person by ID and update their phone number
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { number: body.number },
      { new: true, runValidators: true }
    );

    if (updatedPerson) {
      res.json(updatedPerson);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (err) {
    next(err); // Pass errors to the error handler
  }
});

// Error handling middleware
const errorhandler = (err, req, res, next) => {
  console.error(err.message);
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'something went wrong' });
};

app.use(errorhandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`phonebook is running on port ${PORT}`);
});
