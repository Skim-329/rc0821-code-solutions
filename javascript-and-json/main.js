var books = [
  {
    isbn: '123456',
    title: 'Psychology',
    author: 'Carl Jung'
  },
  {
    isbn: '543210',
    title: 'Letters',
    author: 'Alphabet Soup'
  },
  {
    isbn: '234567',
    title: 'Knitting',
    author: 'Bob Jones'
  }
];

console.log('books:', books);
console.log('Type of books:', typeof books);

var JSONbooks = JSON.stringify(books);

console.log('JSONbooks:', JSONbooks);
console.log('Type of JSONbooks:', typeof JSONbooks);

var JSONstudent = '{"id":12345, "name":"Bart Simpson"}';

console.log('JSONstudent:', JSONstudent);
console.log('type of JSONstudent:', typeof JSONstudent);

var student = JSON.parse(JSONstudent);

console.log('student:', student);
console.log('type of student:', typeof student);
