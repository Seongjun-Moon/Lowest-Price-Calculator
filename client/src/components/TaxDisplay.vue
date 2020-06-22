<template>
  <div>
    <h2>관부가세 계산해보실?</h2>
    <form>
      구입국가
      <select id="country" name="country">
        <option value="미국">미국</option>
        <option value="유럽연합">유럽 연합</option>
        <option value="일본">일본</option>
        <option value="중국">중국</option>
        <option value="홍콩">홍콩</option>
        <option value="호주">호주</option>
        <option value="영국">영국</option>
        <option value="캐나다">캐나다</option>
      </select>
      <br />
      <label for="fname">물품 가격 :</label>

      <input type="text" id="price" name="price" />
      <br />
      <div>
        <label for="lname">물품무게 :</label>
        <input type="text" id="weight" name="weight" />

        <select name="weightUnit" id="weightUnit">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
          <option value="oz">oz</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>