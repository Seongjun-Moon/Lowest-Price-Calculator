//CasperJS 객체 생성
var casper = require("casper").create();

// CasperJS처리 시작
casper.start();

// 화면 사이즈 설정
casper.viewport(1400, 800);

// UserAgent 설정
casper.userAgent(
  "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
);

// 강아지로 검색
// var text = encodeURIComponent("강아지");
casper.open("https://www.catchfashion.com/men/promotions/cashbacks");

// 화면 캡쳐---- (¦4)
/* casper.then(function () {
  this.capture("cash.png", {
    top: 0,
    left: 0,
    width: 1400,
    height: 800,
  });
}); */

/* //이미지 주소 받아오기
casper.then(function () {
  var images = this.evaluate(function () {
    var cashImages = document.getElementsByTagName("img");
    // var cashImages = document.querySelectorAll("img.hahYCD");
    var cashImagesClass = document.querySelector("img.hahYCD");
    console.log(cashImages);
    var allSrc = [];
    for (var i = 0; i < cashImages.length; i++) {
      allSrc.push({ img_src: cashImages[i].src });
    }
    return JSON.stringify(allSrc);
  });
  this.echo(images.split(","));
  //console.log(images);
}); */
casper.then(function () {
  var cashValue = this.evaluate(function () {
    var cash = document.querySelectorAll("div.cJPTCu");
    var cashList = [];
    for (var i = 0; i < cash.length; i++) {
      cashList.push({ cash_value: cash[i].innerHTML });
    }
    return JSON.stringify(cashList);
  });
  this.echo(cashValue);
  // console.log(cashValue);
});

//이미지 주소 받아오기
casper.then(function () {
  var images = this.evaluate(function () {
    var cashImages = document.getElementsByTagName("img");
    // var cashImages = document.querySelectorAll("img.hahYCD");
    var cashImagesClass = document.querySelectorAll("img.bAgfvj");
    //console.log(cashImages);
    var allSrc = [];
    for (var i = 0; i < cashImagesClass.length; i++) {
      allSrc.push({ img_src: cashImagesClass[i].src });
    }
    return JSON.stringify(allSrc);
  });

  this.echo(images.split(","));
  //console.log(images);
});
// 실행개시
casper.run();
