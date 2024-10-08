import express from 'express';
import loginroute from './routes/loginRoute.js';
import signuproute from './routes/SignupRoute.js';
import uploadFilesRoute from './routes/uploadFilesRoute.js';
import downloadDocumentRoute from './routes/downloadDocumentRoute.js';
import connectDB from './config/MongooseConfig.js';
const app = express();  // create express app



app.use(express.json());  // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded

connectDB();

app.use('/login', loginroute);
app.use('/signup', signuproute);
app.use('/upload', uploadFilesRoute);
app.use('/download', downloadDocumentRoute);


app.get('/', (req, res) => {
    res.send('Hello World');
});  // create a route  


app.listen(3000, () => {
    console.log('server started');
});  // listen for requests

