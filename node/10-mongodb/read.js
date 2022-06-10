// yarn add mongodb
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function runMyQuery() {
  // connect
  await client.connect();

  // select db
  const db = client.db('timetracker');

  // select collection
  const users = db.collection('users');

  // run query on selected collection

  const cursor = await users.find();

  // show results
  cursor.forEach((user) => {
    console.log('user data: ', user);
  });
}

runMyQuery();
