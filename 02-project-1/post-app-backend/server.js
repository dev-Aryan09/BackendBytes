const app = require("./src/app");

const connectDB = require("./src/db/db");
connectDB();

app.listen(3000, () => {
  console.log("Server has started at the port 3000");
});
