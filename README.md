## Lowest Price Calculator

### [프로젝트 일지](https://github.com/Seongjun-Moon/Lowest-Price-Calculator/wiki)



### ✏️ 프론트엔드 & 백엔드

#### - 프론트엔드

Vuejs를 이용하여 프론트엔드를 구성

props와 emit의 구조를 이해

vuex 및 vue router는 배웠으나 아직 프로젝트에 적용하지는 못함(추후에 적용 예정)



#### - 백엔드

Nodejs를 이용하여 백엔드를 구성

기능별 router 구성





### 📝 사용 모듈

- cheerio

캐시백 사이트(샵백)의 캐시백 정보를 크롤링 하기 위해 사용

nodejs에서 일반적으로 사용하능 크롤링 모듈

body의 원하는 데이터를 크롤링



- casperjs

캐시백 사이트(캐치패션)의 캐시백 정보를 크롤링 하기 위해 사용

원하는 정보의 div태그의 클래스 네임이 랜덤 제너레이트 되는 것을 알고, cheerio모듈 대신 casperjs를 사용

casperjs는 보이지 않는 인터넷 창을 통해 해당 페이지를 캡쳐하고 원하는 데이터를 가져오는 방식

nodejs에서는 require 되지 않아 server의 router에서 해당 casperjs 파일을 load 하는 코드를 추가로 작성