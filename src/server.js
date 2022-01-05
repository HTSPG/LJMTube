import express from "express";

const PORT = 3333;

const app = express();

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);