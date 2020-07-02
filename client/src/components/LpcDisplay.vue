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
                <p class>{{ searchData.summary }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CATCHFASSION">
          <h1>캐치패션</h1>
          <div class="ui three column grid">
            <div clss="column" v-for="searchData2 in searchDatas2" :key="searchData2.id">
              <div class="ui segment">
                <img :src="searchData2.img_src" width="50px" />
                <p>{{ searchData2.cash_value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div id="calculatie">
        <h2>계산기</h2>판매가격 :
        <input type="text" />
        <br />판매 편집샵 :
        <select name id></select>
        <br />캐시백 :
        <input type="text" placeholder="10%" />
        <button>계산</button>
        <br />최종가격 :
        <br />
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
    searchDatas: Array,
    searchDatas2: Array
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
#calculate {
  justify-content: center;
}
</style>
