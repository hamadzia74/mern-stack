// commonjs modules
const http = require('http');

let projects = [
  { id: 1, title: 'home work' },
  { id: 2, title: 'return book to library' },
  { id: 3, title: 'buy grocery' },
  { id: 4, title: 'play cricket' },
];

const server = http.createServer((request, response) => {
  response.end(JSON.stringify(projects));
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
