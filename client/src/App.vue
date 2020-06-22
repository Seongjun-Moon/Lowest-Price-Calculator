<template>
  <div id="app">
    <h1>문씨네 직구정보</h1>
    <List @isButtonClicked="isButtonClicked" />
    <br />
    <br />
    <MainDisplay v-if="containerName === 'main'" />
    <LpcDisplay v-else-if="containerName === 'lpc'" @input="input" />
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
    WishDisplay,
  },
  data() {
    return {
      containerName: "main",
      searchResult: [],
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
        .then((res) => {
          console.log(res.data);
          this.searchResult = res.data.searchResult;
        });
    },
  },
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
