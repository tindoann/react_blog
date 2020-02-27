import express from 'express'; 
import bodyParser from 'body-parser'; 

// this creates the backend app

const articlesInfo = {
  'learn-react': {
    upvotes: 0, 
    comments: [],
  }, 
  'learn-node': {
    upvotes: 0,
    comments: [], 
  }, 
  'my-thoughts-on-resumes': {
    upvotes: 0,
    comments: [], 
  }, 
}

const app = express(); 

// when our app gets a 'get request to the hell end point', it responds with a 'hello' 

// two callbacks when the app is requested
// app.get('/hello', (req, res) => res.send('Hello!')); 
// app.post('/hello/:name', (req, res) => res.send(`Hello ${req.param.name}`)); 
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`)); 

// defines a new endpoint that we can send requests to in order to update the number of upvote on a given article - url parameter

app.use(bodyParser.json());  

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name; 

  articlesInfo[articleName].upvotes += 1;
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)   
}); 

app.post('/api/articles/:name/add-comment', (req,res) => {
  const { username, text } = req.body; 
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text }); 

  res.status(200).send(articlesInfo[articleName]); 
}); 

app.listen(8000, () => console.log('Listening on port 8000')); 