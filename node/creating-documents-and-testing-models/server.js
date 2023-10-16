const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Read our variables from the file & save them into node.js environment variables
dotenv.config({ path: './config.env' })

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
}).then(() => console.log('DB conection successful!'));
// (con => {
//     console.log(con.connections);
//     console.log('DB connection successful!')
// });

//Creating a Basic Schema
const tourSchema = new mongoose.Schema({
    // name: String,
    // rating: Number,
    // price: Number
    name: {
        //This object is here schema type options 
        type: String,
        // required: true
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

//Creating a Model (Always use uppercase in model names & variables)
const Tour = mongoose.model('Tour', tourSchema);

//New Document created out of the tour model
const testTour = new Tour({
    name: 'The Park Camper',
    price: 997
});
//testTour=document instance
testTour.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log('ERROR:', err)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on Server ${port}...`)
}
)

