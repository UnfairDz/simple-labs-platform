const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// on production, this is coming from ecosystem.config.js
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose
  //Hosted Database
  .connect(DB, {
  //if you want to use instead the Local Database comment the line above and uncomment the line below
  //.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
