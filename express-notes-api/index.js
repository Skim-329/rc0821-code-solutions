const express = require('express');
const app = express();

const data = require('./data');
const notes = data.notes;

const requiredFieldError = {
  error: 'content is a required field'
};

const serverError = {
  error: 'an unexpected error has occurred.'
};

const notIntegerError = {
  error: 'id must be a positive integer.'
};

const objectNotFoundError = {
  error: 'cannot find note with id '
};

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const id in notes) {
    jsonArray.push(notes[id]);
  }
  res.status(200).json(jsonArray);
});

app.get('/api/notes/:id', (req, res) => {
  const idAsString = req.params.id;
  const idAsNumber = Number(idAsString);
  if (Number.isInteger(idAsNumber) && idAsNumber > 0) {
    const noteAtId = notes[idAsString];
    if (noteAtId === undefined) {
      objectNotFoundError.error += idAsString;
      res.status(404).json(objectNotFoundError);
    } else {
      res.status(200).json(noteAtId);
    }
  } else {
    res.status(400).json(notIntegerError);
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = data.nextId++;
  if (newNote.content === undefined) {
    res.status(400).json(requiredFieldError);
  } else {
    newNote.id = id;
    notes[id] = newNote;
    const fs = require('fs');
    const r = JSON.stringify(data);

    fs.writeFile('data.json', r, err => {
      if (err) {
        res.status(500).json(serverError);
        throw err;
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idAsString = req.params.id;
  const idAsNumber = Number(idAsString);
  if (Number.isInteger(idAsNumber) && idAsNumber > 0) {
    const noteAtId = notes[idAsString];
    if (noteAtId === undefined) {
      res.status(404).json(objectNotFoundError);
    } else {
      delete notes[idAsNumber];
      const fs = require('fs');
      const r = JSON.stringify(data);

      fs.writeFile('data.json', r, err => {
        if (err) {
          res.status(500).json(serverError);
          throw err;
        } else {
          res.status(204).json();
        }
      });
    }
  } else {
    res.status(400).json(notIntegerError);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const newNote = req.body;
  const idAsString = req.params.id;
  const idAsNumber = Number(idAsString);
  if (newNote.content === undefined) {
    res.status(400).json(requiredFieldError);
  } else if (!Number.isInteger(idAsNumber) || idAsNumber <= 0) {
    res.status(400).json(notIntegerError);
  } else {
    const noteAtId = notes[idAsString];
    if (noteAtId === undefined) {
      res.status(404).json(objectNotFoundError);
    } else {
      newNote.id = idAsNumber;
      notes[idAsString] = newNote;
      const fs = require('fs');
      const r = JSON.stringify(data);

      fs.writeFile('data.json', r, err => {
        if (err) {
          res.status(500).json(serverError);
          throw err;
        } else {
          res.status(200).json(newNote);
        }
      });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
