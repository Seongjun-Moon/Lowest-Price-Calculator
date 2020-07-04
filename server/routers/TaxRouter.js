const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/exchange", (req, res) => {
  axios
    .get(
      `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.API_KEY}&searchdate=20200703&data=AP01`
    )
    .then((resp) => {
      console.log(resp);
      const exchange = resp.data;
      console.log(exchange);
      return res.json({ exchange });
    });
});
module.exports = router;
