<template>
  <div>
    <h2>최저가 검색해보실?</h2>
    <input type="text" @keypress.enter="input" v-model="searchValue" />
    <div>
      <h1>샵백</h1>
      <ul v-for="searchData in searchDatas" :key="searchData.id">
        <li>
          <img :src="searchData.image_url" :alt="searchData.image_alt" />
          {{searchData.summary}}
        </li>
      </ul>
    </div>
    <div>
      <h1>캐치패션</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LpcDisplay",
  data() {
    return {
      searchValue: null
    };
  },
  props: {
    searchDatas: Array
  },
  methods: {
    input() {
      this.$emit("input", this.searchValue);
    }
  }
};
</script>

<style></style>
