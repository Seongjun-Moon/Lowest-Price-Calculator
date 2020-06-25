<template>
  <div>
    <h2>최저가 검색해보실?</h2>
    <input type="text" @keypress.enter="input" v-model="searchValue" />
    <div>
      <div class="cashDisplay">
        <div class="SHOPBACK">
          <h1>샵백</h1>
          <div class="ui three column grid">
            <div class="column" v-for="searchData in searchDatas" :key="searchData.id">
              <div class="ui segment">
                <img :src="searchData.image_url" :alt="searchData.image_alt" width="50px" />
                <p class>{{searchData.summary}}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>캐치패션</h1>
        </div>
      </div>
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

<style>
.cashDisplay {
  display: grid;
  /* justify-content: space-evenly; */
  grid-template-columns: 1fr 1fr;
}
</style>
