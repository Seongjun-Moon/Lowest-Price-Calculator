<template>
  <div>
    <button @click.prevent="$emit('isButtonClicked', lpc)">최저가 계산기</button>
    <button @click.prevent="$emit('isButtonClicked', tax)">관,부가세 계산기</button>
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