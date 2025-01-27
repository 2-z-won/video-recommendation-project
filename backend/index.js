require('dotenv').config();  // 상단에 추가
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB 연결
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI) // 옵션 빼고 간단히
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
