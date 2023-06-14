const express = require("express");

//const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const labRouter = require("./routes/labRoutes");

// Start express app
const app = express();



// 1) GLOBAL MIDDLEWARES
// Implement CORS
//app.use(cors());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//   })
// );

// app.options("*", cors());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Data sanitization against NoSQL query injection
//app.use(mongoSanitize());

// Data sanitization against XSS
//app.use(xss());

// 3) ROUTES
app.use("/api/v1/labs", labRouter);


app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
