const express = require("express");
const app = express();
// class
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// dummy data
const fruits = [
  new Fruit(1, "Apple", "Red"),
  new Fruit(2, "Banana", "Yellow"),
  new Fruit(3, "Orange", "Orange"),
  new Fruit(4, "Grape", "Purple"),
];


// API route to get sorted fruits by color
app.get("/fruits", (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
