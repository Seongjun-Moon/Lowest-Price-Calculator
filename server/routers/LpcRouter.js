const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
var casperProcess = process.platform === "win32" ? "casperjs.cmd" : "casperjs";
var spawn = require("child_process").spawn;
var child = spawn(casperProcess, ["casper_script.js"]);
var cash_Data = [];

child.stdout.on("data", function (data) {
  //console.log(data);
  console.log(String(data).split(","));
  cash_Data.push(String(data).split(","));
  //console.log("spawnSTDOUT:", JSON.stringify(data));
});
child.stderr.on("data", function (data) {
  console.log("spawnSTDERR:", JSON.stringify(data));
});

// child.on("exit", function (code) {
//   console.log("spawnEXIT:", code);
// });

router.post("/search", function (req, res, next) {
  // const url = "https://www.yna.co.kr/sports/all";
  const url2 = "https://www.shopback.co.kr/luxury-fashion";

  axios.get(url2).then((html) => {
    let ulList = [];
    let summaryList = [];

    const $ = cheerio.load(html.data);
    // const $bodyList = $("div.section01 ul.list").children("li");
    const $bodyList = $("div.store-box").children("div.store-box__image-url");
    const $summary = $("div.store-box").children("div.store-box__display-text");
    //each : list 마다 함수 실행, forEach와 동일
    $bodyList.each(function (i, elem) {
      ulList[i] = {
        image_url: $(this).find("img").attr("src"),
        image_alt: $(this).find("img").attr("alt"),
      };
    });
    $summary.each(function (i, elem) {
      summaryList[i] = {
        summary: $(this).text(),
      };
    });

    const img_data = ulList.filter((n) => n.image_alt);
    const summary_data = summaryList.filter((n) => n.summary);
    //json으로 변환하여 app으로 전송
    return res.json({ img_data, summary_data, cash_Data });
  });
});

module.exports = router;
