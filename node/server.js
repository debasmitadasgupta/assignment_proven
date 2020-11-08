const express = require('express')
const app = express()
const port = 8000
const fs = require('fs')
var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/write', (req, res) => {
    if (req.body) {
        const jsonString = JSON.stringify(req.body)
        fs.writeFile('./annotateData.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        res.send('Data saved Successfully')
    }else{
        console.log("Missing request body")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})