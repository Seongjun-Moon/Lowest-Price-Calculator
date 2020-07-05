<template>
  <div class="mainDisplay">
    <div class="mainDescription">
      <p>
        📝 캐시백정보 탭 : 두가지 캐시백 사이트에서 적용할 수 있는 편집샵의
        캐시백 정보를 출력
      </p>
      <br />
      <p>
        📝 가격 계산기 탭 : 구입국가, 물품 가격에 맞춰 관부가세, 가격, 캐시백 후
        최종가격 계산 기능
      </p>
      <br />
      <p>
        📝 Wishlist 탭 : 원하는 상품의 가격 인하 시 push 알람이 오는 기능을
        구현하고 싶었으나, 시간부족으로 추후에 구현해볼 예정
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDisplay",
};
</script>

<style>
.mainDisplay {
  width: 80%;
  height: 25rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
