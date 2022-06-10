// yarn add mongodb

const { MongoClient, ObjectID } = require('mongodb');

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

  const result = await users.deleteOne({
    _id: new ObjectID('6061a1cd4be87b15bddbf982'),
  });

  // show results
  console.log(result);
}

runMyQuery();
