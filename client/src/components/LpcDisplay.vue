<template>
  <div>
    <h2>최저가 검색해보실?</h2>
    <input type="text" @keypress.enter="input" v-model="searchValue" />
  </div>
</template>

<script>
export default {
  name: "LpcDisplay",
  data() {
    return {
      searchValue: null,
    };
  },
  methods: {
    input() {
      this.$emit("input", this.searchValue);
    },
  },
};
</script>

<style></style>
