const dotenv = require('dotenv');
//Read our variables from the file & save them into node.js environment variables
dotenv.config({path: './config.env'})

const app = require('./app');


//Environment Variables
// console.log(app.get('env'));
// Start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on Server ${port}...`)
}
)

 