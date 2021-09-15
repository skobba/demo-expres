import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


if (!process.env.FRONTEND || !process.env.PORT) {
  throw 'Make sure you have FRONTEND and PORT in your .env file';
}

var app = express()

app.use(cors())

app.get('/json', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT, () => {
  console.log(`CORS-enabled web server listening on port ${process.env.PORT}`)
})
