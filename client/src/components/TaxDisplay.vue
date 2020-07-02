<template>
  <div>
    <div class="TAX_DISPLAY">
      <div class="tax">
        <h2>관부가세 계산해보실?</h2>
        <br />
        <div>
          구입국가
          <select id="country" name="country">
            <option value="호주">호주</option>
            <option value="캐나다">캐나다</option>
            <option value="중국">중국</option>
            <option value="유럽연합">유럽 연합</option>
            <option value="영국">영국</option>
            <option value="홍콩">홍콩</option>
            <option value="일본">일본</option>
            <option value="미국">미국</option>
          </select>
          <br />
          <label for="fname">물품 가격 :</label>

          <input type="text" id="price" name="price" />
          <select id="currency">
            <option
              v-for="exchange_value in exchange_values"
              :key="exchange_value.cur_nm"
              :value="exchange_value.tts"
            >{{ exchange_value.cur_unit }}</option>
          </select>
          <br />

          <!-- <label for="lname">물품무게 :</label>
          <input type="text" id="weight" name="weight" />

          <select name="weightUnit" id="weightUnit">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
            <option value="oz">oz</option> </select
          ><br />-->
          <button @click="taxCalculate">계산</button>
          <p>최종가격 : {{ this.calculation }}원</p>
        </div>
        <br />
        <br />
        <p>
          * 미국에서 직구 : $200 초과시 관부가세
          <br />* 미국 외 국가에서 직구 : $150 초과시 관부가세
          <br />* 무게에 따른 비용 및 배송비는 제외
        </p>
      </div>
      <div class="EXCHANGE_RATE">
        <h2>환율(원)</h2>
        <div v-for="exchange_value in exchange_values" :key="exchange_value.cur_nm">
          {{ exchange_value.cur_nm }}
          {{ "(" + exchange_value.cur_unit + ")" }}
          <p :id="exchange_value.cur_unit">{{ exchange_value.tts }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TaxDisplay",
  data() {
    return {
      exchange_values: [],
      cur_unit: ["USD", "EUR", "JPY(100)", "CNH", "HKD", "AUD", "GBP", "CAD"],
      calculation: ""
    };
  },
  created() {
    this.exchange();
  },
  methods: {
    exchange() {
      axios.get("http://localhost:7777/tax/exchange").then(res => {
        const a = res.data.exchange;
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < this.cur_unit.length; j++) {
            if (a[i].cur_unit == this.cur_unit[j]) {
              this.exchange_values.push({
                cur_nm: a[i].cur_nm,
                cur_unit: a[i].cur_unit,
                tts: a[i].tts
              });
            }
          }
        }
      });
    },
    taxCalculate() {
      const country = document.getElementById("country").value;
      const price = Number(document.getElementById("price").value);
      const dollar = Number(
        document.getElementById("USD").innerText.replace(",", "")
      );
      const currency = Number(
        document.getElementById("currency").value.replace(",", "")
      );
      console.log(dollar);
      console.log(currency);
      if (country == "미국") {
        if (price > 200) {
          return (this.calculation = (
            (price + price * 0.13) *
            1.1 *
            dollar
          ).toFixed(2));
        } else {
          // return (this.calculation = price);

          return (this.calculation = (dollar * price).toFixed(2));
        }
      } else {
        if (price * currency > 150 * dollar) {
          //관부가세
          // 미국외 국가는 150$ 이상부터 관부가세가 붙으니
          // 해당국가 통화 * 구입가격 > 150*dollar
          return (this.calculation = (
            (price + price * 0.13) *
            1.1 *
            currency
          ).toFixed(2));
          // 통화 바꾸기
          // price
        } else {
          return (this.calculation = (price * currency).toFixed(2));
        }
      }
    }
  }
};
</script>

<style>
.TAX_DISPLAY {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
