const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://Aayush:<password>@cluster0.zgbk6yj.mongodb.net/<dataBasename>")
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const newSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
