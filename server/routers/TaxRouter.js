const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/exchange", (req, res) => {
  axios
    .get(
      "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=hVnU5ZgvNHayhtgZtiLgNoJ9rowortpJ&data=AP01"
    )
    .then((resp) => {
      const exchange = resp.data;
      console.log(exchange);
      return res.json({ exchange });
    });
});
module.exports = router;
