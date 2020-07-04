<template>
  <nav class="nav">
    <button class="nav-button" @click.prevent="$emit('isButtonClicked', lpc)">
      캐시백 정보
    </button>
    <button class="nav-button" @click.prevent="$emit('isButtonClicked', tax)">
      가격 계산기
    </button>
    <button class="nav-button" @click.prevent="$emit('isButtonClicked', wish)">
      WishList
    </button>
  </nav>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      lpc: "lpc",
      tax: "tax",
      wish: "wish",
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
