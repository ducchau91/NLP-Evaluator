//Add API
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';


// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var path = require('path');
const express = require('express');
// Start up an instance of app
const app = express();

//configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));



//const mockAPIResponse = require('./mockAPI.js')

console.log(__dirname)

//GET Route
//app.get('/weather', (req, res) => res.send(projectData));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})



const getURL = async (baseURL, apiKey)=>{
    const urlInput = req.body.url
    const fullUrl = await fetch(baseURL + 'key=' + apiKey + '&url=' + urlInput + '&lang=en')
    console.log(request);
        try {
            const allData = await request.json();
            return allData;
        }
        catch(error) {
            console.log('error', error);
        }
    }

//POST Route

app.post('/url/save', allData)

function allData(request, response) {
    projectData.score_tag = request.body.score_tag;
    projectData.agreement = request.body.agreement;
    projectData.subjectivity = request.body.subjectivity;
    projectData.confidence = request.body.confidence;
    projectData.irony = request.body.iron;
    response.end();
    console.log(projectData)
}
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
