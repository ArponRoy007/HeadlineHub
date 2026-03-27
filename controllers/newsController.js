const axios = require("axios");

exports.getNews = async (req, res) => {
  console.log("Dashboard route hit");

  const category = req.query.category || "general";

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.render("dashboard", {
      articles: response.data.articles || [],
      category
    });

  } catch (error) {
    console.log("API ERROR:", error.message);

    res.render("dashboard", {
      articles: [],
      category
    });
  }
};