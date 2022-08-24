const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors("*"));

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
