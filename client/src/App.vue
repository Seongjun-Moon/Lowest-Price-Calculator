<template>
  <div id="app">
    <h1>문씨네 직구정보</h1>
    <List @isButtonClicked="isButtonClicked" />
    <br />
    <br />
    <MainDisplay v-if="containerName === 'main'" />
    <LpcDisplay v-else-if="containerName === 'lpc'" />
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
      containerName: "main"
    };
  },
  methods: {
    isButtonClicked(value) {
      this.containerName = value;
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
