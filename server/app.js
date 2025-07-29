const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routes/index");
const itemRouter = require("./routes/item");
const authRouter = require("./routes/Auth");
const reservationRouter = require("./routes/reservation");
const stripeRouter = require("./routes/stripe");
const searchRouter = require("./routes/Search"); 

const app = express();


mongoose
  .connect(process.env.DB_KEY)
  .connect("mongodb+srv://admin:adminadmin@cluster0.eblkf.mongodb.net/marvelgym?retryWrites=true&w=majority&appName=Cluster0")

  .then(() => console.log(" Databáze připojena"))
  .catch((err) => console.error(" nelze se připojit k databázi:", err));


const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/item", itemRouter);
app.use("/auth", authRouter);
app.use("/reservation", reservationRouter);
app.use("/stripe", stripeRouter);
app.use("/search", searchRouter); 


app.use((req, res, next) => {
  next(createError(404));
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Došlo k chybě",
  });
});

module.exports = app;
