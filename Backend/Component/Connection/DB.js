const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/tution", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection established with database");
  })
  .catch((error) => {
    console.log(error);
  });
