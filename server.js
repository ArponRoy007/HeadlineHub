const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// ✅ CREATE APP FIRST
const app = express();

// ================= DB =================
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/newsapp")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// ================= MIDDLEWARE =================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ================= STATIC =================
app.use(express.static(path.join(__dirname, "public")));

// ================= VIEW ENGINE =================
app.set("view engine", "ejs");

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

app.use("/", authRoutes);

// ================= DASHBOARD =================
app.get("/", authMiddleware, async (req, res) => {
  const axios = require("axios");

  const category = req.query.category || "general";
  const page = req.query.page || 1;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&pageSize=10&page=${page}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.render("dashboard", {
      articles: response.data.articles || [],
      category,
      page: Number(page)
    });

  } catch (err) {
    console.log(err.message);

    res.render("dashboard", {
      articles: [],
      category,
      page: Number(page)
    });
  }
});

// ================= SERVER =================
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});