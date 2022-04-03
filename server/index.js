// Importing Packages
const express = require("express");
const cors = require("cors");
const path = require("path");

// Importing data and random function to generate data from the array
const { catsList, sharksList } = require("./data");
const { random } = require("./Function/random");

const app = express();

// setting up a Port for server:- 5000
const port = process.env.PORT || 3000;



// Creating an array for valid Origin URLs
const validOrigins = ["http://localhost:3000", "http://localhost:8080"];

// checking valid origin and returning a response, if not returning error message
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (!validOrigins.includes(origin)) {
        const errorMessage = "Can't access origin because of the CORS Policy";
        return callback(new Error(errorMessage), false);
      }

      return callback(null, true);
    },
  })
);

// setting up a path for a bundle directory path for static express content
const BUNDLE_DIRECTORY = path.resolve(__dirname, "../bundle");

// Creating bundles for static data in bundle directory
app.use(express.static(BUNDLE_DIRECTORY));


//  Setting up a route and returning a Static file as response
app.get("/", (req, res) => {
  const STATIC_FILE = path.join(BUNDLE_DIRECTORY, "index.html");
  res.sendFile(STATIC_FILE);
});

// Creating a route based on choice of the animal with switch case and returning response from arraylist
app.get("/api/:choice", (req, res) => {
  // Setting up a no-cache policy
  res.set("Cache-control", "no-cache");

  switch (req.params.choice) {
    case "both":
      res.send(random([...sharksList, ...catsList]));
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

// listening server on 5000 socket
app.listen(port, () => {
  console.log(`Server running on Localhost:${port}`);
});
