<template>
  <div id="app">
    <h1>문씨네 직구정보</h1>
    <List @isButtonClicked="isButtonClicked" />
    <br />
    <br />
    <MainDisplay v-if="containerName === 'main'" />
    <LpcDisplay
      v-else-if="containerName === 'lpc'"
      @input="input"
      :searchDatas="searchDatas"
      :searchDatas2="searchDatas2"
    />
    <TaxDisplay v-else-if="containerName === 'tax'" />
    <WishDisplay v-else-if="containerName === 'wish'" />
  </div>
</template>

<script>
import List from "./components/List";
import MainDisplay from "./components/MainDisplay";
import LpcDisplay from "./components/LpcDisplay";
import TaxDisplay from "./components/TaxDisplay";
import WishDisplay from "./components/WishDisplay";
import axios from "axios";

export default {
  name: "App",
  components: {
    List,
    MainDisplay,
    LpcDisplay,
    TaxDisplay,
    WishDisplay
  },
  data() {
    return {
      containerName: "main",
      searchDatas: [],
      searchDatas2: []
    };
  },
  methods: {
    isButtonClicked(value) {
      this.containerName = value;
    },
    input(searchValue) {
      console.log(searchValue);
      axios
        .post("http://localhost:7777/lpc/search", { searchValue })
        .then(res => {
          const searchResults = res.data.img_data;
          const searchResults2 = res.data.summary_data;
          const cash_value = JSON.parse(res.data.cash_Data[0]);
          const cash_img = JSON.parse(res.data.cash_Data[1]);
          // const cash_search = JSON.parse(searchResults_cash);

          // console.log(cash_search);
          // console.log(
          //   Object.assign({ ...this.searchResults[0] }, this.searchResults2[0])
          // );
          for (let i = 0; i < searchResults.length; i++) {
            this.searchDatas.push(
              Object.assign({ ...searchResults[i] }, searchResults2[i])
            );
          }
          console.log(this.searchDatas);

          for (let i = 0; i < cash_img.length; i++) {
            this.searchDatas2.push(
              Object.assign({ ...cash_value[i] }, cash_img[i])
            );
          }
          console.log(this.searchDatas2);
          /* for (let i = 1; i < 15; i++) {
            this.searchResults_cash.push({
              img_src: searchResults_cash[i].img_src
            });
          }
          console.log(this.searchResults_cash); */
        });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
