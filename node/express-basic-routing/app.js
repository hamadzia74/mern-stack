const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.status(200).send('Hello from the Server Side!')
// })

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello from the Server Side!', app: 'Natours'})
})


const port = 3000;
app.listen(port, () => {
    console.log(`App running on Server ${port}...`)
}
)

