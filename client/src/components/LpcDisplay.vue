<template>
  <section class="lpcDisplay">
    <h2>해외편집샵 캐시백 정보</h2>

    <article
      v-if="searchDatas.length > 0 && searchDatas2.length > 0"
      class="shoplist-container"
    >
      <div class="shopback">
        <h1>샵백</h1>
        <div class="shopback-list">
          <div
            class="shopback-list_item"
            v-for="searchData in searchDatas"
            :key="searchData.id"
          >
            <div
              class="shopback-list_item-img"
              :style="{
                'background-image': 'url(' + searchData.image_url + ')',
              }"
            ></div>
            <p class>{{ searchData.summary }}</p>
          </div>
        </div>
      </div>

      <div class="catchFashion">
        <h1>캐치패션</h1>
        <div class="catchFashion-list">
          <div
            class="catchFashion-list_item"
            v-for="searchData2 in searchDatas2"
            :key="searchData2.id"
          >
            <div
              class="catchFashion-list_item-img"
              :style="{
                'background-image': 'url(' + searchData2.img_src + ')',
              }"
            ></div>
            <p>{{ searchData2.cash_value }}</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "LpcDisplay",
  data() {
    return {
      searchValue: null,
    };
  },
  props: {
    searchDatas: Array,
    searchDatas2: Array,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
