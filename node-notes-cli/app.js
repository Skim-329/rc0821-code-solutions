const fs = require('fs');
const data = require('./data');

function writeToFile(obj) {
  const JSONstring = JSON.stringify(obj, null, 2);
  fs.writeFile('data.json', JSONstring, err => {
    if (err) throw err;
  });
}

function create(obj, text) {
  const propertyName = obj.nextId;
  obj.notes[propertyName] = text;
  obj.nextId++;
  writeToFile(obj);
}

function read(obj) {
  const notesProp = Object.keys(obj.notes);
  for (var i = 0; i < notesProp.length; i++) {
    const propertyName = notesProp[i];
    console.log(propertyName + ': ' + obj.notes[propertyName]);
  }
}

function update(obj, propertyName, text) {
  obj.notes[propertyName] = text;
  writeToFile(obj);
}

function deleteNotes(obj, propertyName) {
  delete obj.notes[propertyName];
  writeToFile(obj);
}

const command = process.argv[2];
if (command === 'create') {
  create(data, process.argv[3]);
} else if (command === 'read') {
  read(data);
} else if (command === 'update') {
  update(data, process.argv[3], process.argv[4]);
} else if (command === 'delete') {
  deleteNotes(data, process.argv[3]);
}
