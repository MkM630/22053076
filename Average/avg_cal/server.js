require("dotenv").config();
const express = require("express");
const numbersController = require("./src/numbersController");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/numbers/:numberid", numbersController.getNumbers);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
