const express = require("express");
const cors = require("cors");
const path = require("path");


const { catsList, sharksList } = require("./data");
const { random } = require('./Function/random');


const app = express();

const port = process.env.PORT || 5000;

const DIST_DIRECTORY = path.resolve(__dirname, "../dist");

const validOrigins = ["http://localhost:8080", "http://localhost:5000"];

app.use(express.static(DIST_DIRECTORY));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (!validOrigins.includes(origin)) {
        const errorMessage =
          "This specified Origin doesn't get access because of the CORS policy for this site";
        return callback(new Error(errorMessage), false);
      }

      return callback(null, true);
    },
  })
);

app.get("/", (req, res) => {
  const STATIC_FILE = path.join(DIST_DIRECTORY, "index.html");
  res.sendFile(STATIC_FILE);
});

app.get("/api/:choice", (req, res) => {
  res.set("Cache-control", "no-cache");

  switch (req.params.choice) {
    case "images":
      res.send(shuffle([...sharksList, ...catsList]));
      break;
    case "cats":
      res.send(catsList);
      break;
    case "sharks":
      res.send(sharksList);
      break;
    default:
      return;
  }
});

app.listen(port, () => {
  console.log(`Server running on Localhost:${port}`);
});
