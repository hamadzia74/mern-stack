const debug = require('debug')('dev');
const http = require('http');

const { v4: uuid } = require('uuid');

function getId() {
  return String(Math.floor(Math.random() * 100));
}

let usersDB = [];
let products = [];

const server = http.createServer((req, res) => {
  debug('method: ', req.method, 'url: ', req.url);

  let path = req.url.split('/');

  let url = path[1];
  let id = path[2];

  if (url === 'users') {
    if (req.method === 'GET') {
      // fetch users from db
      res.end(JSON.stringify(usersDB));
    } else if (req.method === 'POST') {
      let requestData = '';

      req.on('data', (chunk) => {
        // requestData += chunk;
        requestData = requestData + chunk;
      });

      req.on('end', (err) => {
        if (err) {
          throw new Error('error in process request');
        }

        let data = JSON.parse(requestData);

        let newUser = {
          name: data.name,
          isVerified: false,
          balance: 0,
          id: getId(),
        };

        // store for later use
        usersDB.push(newUser);
        // send as response for this request
        res.end(JSON.stringify(newUser));
      });
    } else if (req.method === 'PATCH') {
      let requestData = '';
      req.on('data', (chunk) => {
        // requestData += chunk;
        requestData = requestData + chunk;
      });

      req.on('end', (err) => {
        if (err) {
          throw new Error('error in process request');
        }

        let data = JSON.parse(requestData);

        // store for later use

        let userToBeUpdated;

        for (let i = 0; i < usersDB.length; i++) {
          // search the user with given id
          if (usersDB[i].id === id) {
            userToBeUpdated = { ...usersDB[i] };
          }
        }

        if (!userToBeUpdated) {
          res.writeHead(404);
          res.end('User not found');
        } else {
          userToBeUpdated.name = data.name;

          usersDB = usersDB.map((item) => {
            if (item.id === id) {
              return userToBeUpdated;
            }

            return item;
          });

          // send as response for this request
          res.end(JSON.stringify(userToBeUpdated));
        }
      });
    }
  } else if (url === 'products') {
    // fetch products from db
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const port = 4000;

server.listen(port, () => {
  debug(`server is listening on http://localhost:${port}`);
});
