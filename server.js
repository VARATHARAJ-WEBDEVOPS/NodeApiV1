require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
var cors = require('cors');

const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3001
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200
}

app.use(express.json());
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/product', productRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    // throw new Error('fake error')
    res.send('This is Vasanth Node Js API')
});

//middleware
app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('connected to mongo db');
        app.listen(PORT, () => {
            console.log(`Port working in http://localhost:${PORT}`);
            console.log(`current working Cors is ${FRONTEND}`);
        });
    }).catch((error) => {
        console.log(error);
    });