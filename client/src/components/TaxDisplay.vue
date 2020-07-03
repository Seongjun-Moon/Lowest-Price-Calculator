<template>
  <div>
    <div class="TAX_DISPLAY">
      <div class="tax">
        <h2>관부가세 및 최종가격 계산</h2>
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
          캐시백률
          <input type="text" id="cashBack" />
          <br />
          <button @click="taxCalculate">계산</button>
          <br />
          <br />
          <p>관,부가세 : {{this.taxValue}}원</p>

          <p>가격 : {{ this.calculation }}원</p>
          <p>캐시백 후 가격 : {{this.afterCash}}원</p>
        </div>
        <br />
        <br />
        <p>
          * 미국에서 직구 : $200 초과시 관부가세
          <br />* 미국 외 국가에서 직구 : $150 초과시 관부가세
          <br />* 무게에 따른 비용 및 배송비는 제외
          <br />* 캐시백은 관부가세를 제외한 물품 가격에 대해서만 적용
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
      calculation: "",
      taxValue: "",
      afterCash: ""
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
      this.taxValue = "";
      this.taxValue = "";
      const country = document.getElementById("country").value;
      const price = Number(document.getElementById("price").value);
      const dollar = Number(
        document.getElementById("USD").innerText.replace(",", "")
      );
      const currency = Number(
        document.getElementById("currency").value.replace(",", "")
      );
      console.log(currency);
      const tax_value = price * 0.13 + (price + price * 0.13) * 0.01;
      const cashBack = Number(document.getElementById("cashBack").value) * 0.01;
      const isTax = (price + price * 0.13) * 1.1 * currency;
      if (country == "미국") {
        if (price > 200) {
          return (
            // 미국에서 $200 초과시 관세
            (this.taxValue = (tax_value * currency).toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            (this.calculation = isTax.toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            // 캐시백 : 총 가격-(원래 가격price * dollar * 10%)
            (this.afterCash = (
              isTax -
              price * currency * cashBack
            ).toLocaleString(undefined, { maximumFractionDigits: 0 }))
          );
        } else {
          // 미국에서 $200 이하 미관세

          return (
            (this.calculation = (currency * price).toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            (this.afterCash = (
              currency *
              price *
              (1 - cashBack)
            ).toLocaleString(undefined, {
              maximumFractionDigits: 0
            }))
          );
        }
      } else {
        // 미국 외 국가
        if (price * currency > 150 * dollar) {
          //관부가세
          // 미국외 국가는 150$ 초과부터 관부가세가 붙으니
          // 해당국가 통화 * 구입가격 > 150*dollar
          return (
            (this.taxValue = (tax_value * currency).toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            (this.calculation = isTax.toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            (this.afterCash = (
              isTax -
              price * currency * cashBack
            ).toLocaleString(undefined, {
              maximumFractionDigits: 0
            }))
          );
        } else {
          // 미국 외 국가 $150 이하 미관세
          return (
            (this.calculation = (price * currency).toLocaleString(undefined, {
              maximumFractionDigits: 0
            })),
            (this.afterCash = (
              price *
              currency *
              (1 - cashBack)
            ).toLocaleString(undefined, {
              maximumFractionDigits: 0
            }))
          );
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
