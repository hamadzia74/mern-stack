const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Read our variables from the file & save them into node.js environment variables
dotenv.config({path: './config.env'})

const app = require('./app');

//Environment Variables
// console.log(app.get('env'));
// Start the Server

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//local database
// mongoose.connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(()=> console.log('DB conection successful!'));

//hosted database version
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log('DB conection successful!'));
// (con => {
//     console.log(con.connections);
//     console.log('DB connection successful!')
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on Server ${port}...`)
}
)

 