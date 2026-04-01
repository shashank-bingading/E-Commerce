const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());

app.use(express.json());

const connectDB = require('./config/db');
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get('/',(req,res)=>{
    res.status(200).json({message: "Connection successful"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});