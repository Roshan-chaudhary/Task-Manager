const Roshan = require('./db/connect')
const express = require('express')
const cors = require('cors');
const app = express();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const dotenv=require('dotenv');
require('dotenv').config();

//midddleware
app.use(cors());
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

app.use(notFound)

app.use(errorHandlerMiddleware)

app.listen(process.env.PORT);