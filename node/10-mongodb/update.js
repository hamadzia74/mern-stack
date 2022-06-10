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

  const result = await users.updateOne(
    {
      _id: new ObjectID('6061a1cd4be87b15bddbf982'),
    },
    { $set: { firstName: 'updated first naem' }, $unset: { fullName: 1 } }
  );

  // show results
  console.log(result);
}

runMyQuery();
