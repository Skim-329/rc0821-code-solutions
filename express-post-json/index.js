const express = require('express');
const app = express();

let nextId = 1;

const grades = {
  1: {
    id: 1,
    name: 'Simon Kim',
    course: 'HTML',
    score: 95
  }
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

const jsonMiddle = express.json();
app.use(jsonMiddle);

app.post('/api/grades', (req, res) => {
  const id = nextId++;
  const newGrade = req.body;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
