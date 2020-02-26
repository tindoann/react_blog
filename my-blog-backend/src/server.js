import express from 'express'; 

// this creates the backend app
const app = express(); 

// when our app gets a 'get request to the hell end point', it responds with a 'hello' 

// two callbacks when the app is requested
app.get('/hello', (req, res) => res.send('Hello!')); 

app.listen(8000, () => console.log('Listening on port 8000'))