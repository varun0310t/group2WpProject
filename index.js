import express from 'express';

const app = express();  // create express app



app.use(express.json());  // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded


app.get('/', (req, res) => {    
    res.send('Hello World');  
});  // create a route  





app.listen(3000, () => {    
    console.log('server started');  
});  // listen for requests

