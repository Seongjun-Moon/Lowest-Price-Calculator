<template>
  <div class="main" @click.prevent="$emit('isButtonClicked', main)">
    <span>🌙</span>
    <span>문</span>
    <span>씨</span>
    <span>네</span>
    <span class="letter"></span>
    <span>직</span>
    <span>구</span>
    <span>정</span>
    <span>보</span>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      main: "main",
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
span {
  margin: 0 15px;
  line-height: 0.7;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
  animation: span 3s ease-in infinite alternate;
}
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  font-size: 42px;
  background: white;
}
.letter {
  display: inline-flex;
  height: 30px;
  width: 27px;
  /* border: 2.5px solid #FF1EAD; */
  border: 2.35px solid black;
  border-radius: 14px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.75), inset 0 0 2px rgba(0, 0, 0, 0.45);

  animation: letter 3s ease-in-out infinite alternate;
}
@keyframes span {
  0%,
  30% {
    margin: 0 15px;
  }
  70%,
  100% {
    margin: 0 5px;
  }
}
@keyframes letter {
  0%,
  30% {
    width: 27px;
  }
  70%,
  100% {
    width: 30vw;
  }
}
</style>
