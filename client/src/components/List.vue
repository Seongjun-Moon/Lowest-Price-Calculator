<template>
  <div>
    <button @click.prevent="$emit('isButtonClicked', lpc)">캐시백 정보</button>
    <button @click.prevent="$emit('isButtonClicked', tax)">가격 계산기</button>
    <button @click.prevent="$emit('isButtonClicked', wish)">WishList</button>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      lpc: "lpc",
      tax: "tax",
      wish: "wish"
    };
  }
};
</script>

<style>
</style>