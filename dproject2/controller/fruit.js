const Fruit = require("../model/fruit")

const Fuitedata =  async (req, res) => {
  try {
    const fruits = await Fruit.find().sort("color");
    res.json(fruits);
  } catch (error) {
    console.error("Error fetching fruits:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports =  {
    Fuitedata
}