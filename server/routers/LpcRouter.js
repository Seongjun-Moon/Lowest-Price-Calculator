const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.post("/search", async (req, res) => {
  console.log(req.body.searchValue);
  const searchValue = req.body.serchValue;

  try {
    const searchResult = `https://www.catchfashion.com/men/search/${searchValue}`;
    res.json({ message: true, searchResult });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;
