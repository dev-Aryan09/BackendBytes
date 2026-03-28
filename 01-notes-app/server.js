// starting the server

const app = require("./src/app"); // main

// const app = require("./src/aaa");  // for practice purpose

const connectDB = require("./src/db/db");
connectDB();

app.listen(3000, () => {
  console.log("The srver is running at the port 3000");
});
