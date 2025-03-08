// create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8080;

// create server
http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = '.' + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// run node comments.js
// visit http://localhost:8080/comments.html
// try to submit a comment
// check the file comments.txt