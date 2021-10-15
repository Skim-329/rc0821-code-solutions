const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select * from grades;
  `;

  db.query(sql)
    .then(data => {
      const grades = data.rows;

      res.json(grades);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Get grades error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const scoreAsNumber = Number(score);
  if (course === undefined || name === undefined) {
    res.status(400).json({ error: 'missing content' });
  } else if (!Number.isInteger(score) || (scoreAsNumber < 0 || scoreAsNumber > 100)) {
    res.status(400).json({ error: 'score must be a positive integer between 0 and 100' });
  }

  const sql = `
    insert into "grades"
      ("name", "course", "score")
      values
      ($1, $2, $3)
    returning *;
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      const grade = data.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const { name, course, score } = req.body;
  const gradeId = parseInt(req.params.gradeId);

  if (!name === undefined) {
    res.status(400).json({ error: 'invalid gradeId or missing content' });
  } else if (!course === undefined) {
    res.status(400).json({ error: 'invalid gradeId or missing content' });
  } else if (!score === undefined) {
    res.status(400).json({ error: 'invalid gradeId or missing content' });
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId is not a valid integer' });
  } else {
    res.status(200).json([name, course, score]);
  }

  const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
      `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(data => {
      const grade = data.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT: 3000');
});
