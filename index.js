import express from 'express';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
import cors from 'cors';

//Connect to database
await mongoose.connect(process.env.MONGO_URI);


//create an express app
const app = express();

//use middlewares
app.use(cors());
app.use(express.json());

//use routes
app.use(todoRouter);
app.use(userRouter);

//Define routes
app.get('/hello', (req, res, next) => {
    console.log(req.headers);
    res.json('You visited the hello endpoint!');
});

app.get('/goodbye', (req, res, next) => {
    console.log(req.query);
    res.json('See you soon');
});

//Listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});