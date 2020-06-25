const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

/* router.post("/search", async (req, res) => {
  console.log(req.body.searchValue);
  const searchValue = req.body.serchValue;

   try {
    const searchResult = `https://www.catchfashion.com/men/search/${searchValue}`;
    res.json({ message: true, searchResult });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
  const getHtml = async () => {
    try {
      return await axios.get("https://www.naver.com");
    } catch (error) {
      console.error(error);
    }
  };

  getHtml()
    .then((html) => {
      let ulList = [];
      const $ = cheerio.load(html.data);
      const $bodyList = $(
        "div.NM_RTK_VIEW_list_map ul.list_realtime NM_RTK_VIEW_list_content"
      ).children("li.realtime_item");

      $bodyList.each(function (i, elem) {
        ulList[i] = {
          title: $(this).find("span.keyword").text(),
          url: $(this).find("a.link_keyword").attr("href"),
        };
      });

      const data = ulList.filter((n) => n.title);
      return data;
    })
    .then((res) => console.log(res));
}); */

router.post("/search", function (req, res, next) {
  const url = "https://www.yna.co.kr/sports/all";
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
        //find : 해당 태그가 있으면 그 요소 반환
        // title: $(this).find("strong.tit-news").text(),
        // url: $(this).find("a.tit-wrap").attr("href"),
        // summary: $(this).find("p.lead").text().slice(0, -11),
        // image_url: $(this).find("p.poto a img").attr("src"),
        // image_alt: $(this).find("p.poto a img").attr("alt"),
        //title: $(this).find("div.sc-kkwfeq cfayGf"),
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
    return res.json({ img_data, summary_data });
  });
});

module.exports = router;
