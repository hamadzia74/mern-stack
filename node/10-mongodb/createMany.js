const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const dbClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function runQuery() {
  await dbClient.connect();

  const db = dbClient.db('timetracker');

  const collection = db.collection('users');

  const result = await collection.insertMany([
    {
      firstName: 'visual 1',
    },
    {
      firstName: 'visual 2',
    },
    {
      firstName: 'visual 3',
    },
  ]);

  console.log('user added with id: ', result);
}

runQuery();
