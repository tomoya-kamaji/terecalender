<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center pa-0" >当初計画</th>
          <th class="text-center pa-0" >出荷額</th>
          <th class="text-center pa-0" >社内売</th>
          <th class="text-center pa-0" >社内買</th>
          <th class="text-center pa-0" >総生産</th>
          <th class="text-center pa-0" >控除額
            <div class="my-2">
              <v-btn
                color="secondary"
                fab
                x-small
                dark
                @click="isShowkouzyo = !isShowkouzyo"
              >
                <v-icon>mdi-television</v-icon>
              </v-btn>
            </div>  
          </th>

          <th class="text-center pa-0"  v-if="isShowkouzyo">仕入商品費</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">外注加工費_外注</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">外注加工費_技術</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">賃借料</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">旅費交通費</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">内部技術料</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">営業手数料</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">その他経費</th>
          <th class="text-center pa-0"  v-if="isShowkouzyo">差し引き収益</th>
          
          <th class="text-center pa-0" >総時間
            <div class="my-2">
              <v-btn
                color="secondary"
                fab
                x-small
                dark
                @click="isShowTime = !isShowTime"
              >
                <v-icon>mdi-television</v-icon>
              </v-btn>
            </div>  
          </th>
          <th class="text-center pa-0"  v-if="isShowTime">直接時間</th>
          <th class="text-center pa-0"  v-if="isShowTime">部門内間接時間</th>
          <th class="text-center pa-0"  v-if="isShowTime">部門共通時間</th>

          <th class="text-center pa-0" >時間当り</th>
          <th class="text-center pa-0" >税前利益</th>
          <th class="text-center pa-0" >税前利益率</th>
          
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in fields"
          :key="item.name"
        >
          <td  class="pa-0">
            <v-select
              v-model="item.month"
              item-text="label"
              item-value="value"
              :items="selectmonth"
            />  
          </td>  <!-- 当初計画 -->
          <td  class="pa-0"><input type="number" class="form-control" v-model.number="item.ShipmentValue" @blur.prevent="updatefields"></td> <!-- 出荷額 --> 
          <td  class="pa-0"><input type="number" class="form-control" v-model.number="item.InSales" @blur.prevent="updatefields"></td> <!-- 社内売 -->
          <td  class="pa-0"><input type="number" class="form-control" v-model.number="item.Inpurchase" @blur.prevent="updatefields"></td><!-- 社内買 -->
          <td  class="pa-0">{{ item.Gross }}</td><!-- 総生産 -->
          <td  class="pa-0">{{ item.Deduction }}</td><!-- 控除額 -->


          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.PurchaseCost" @blur.prevent="updatefields"></td><!-- 仕入れ額 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.Outsourved" @blur.prevent="updatefields"></td><!-- 外注加工費_外注 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.Technicaldispatch" @blur.prevent="updatefields"></td><!-- 外注加工費_技術 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.Rent1" @blur.prevent="updatefields"></td><!-- 賃借料 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.TravelExpenses" @blur.prevent="updatefields"></td><!-- 旅費交通費 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.TechnicalFee" @blur.prevent="updatefields"></td><!-- 内部技術料 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.OperatingFee" @blur.prevent="updatefields"></td><!-- 営業手数料 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.OtherExpenses" @blur.prevent="updatefields"></td><!-- その他経費 -->
          <td  class="pa-0" v-if="isShowkouzyo"><input type="number" class="form-control" v-model.number="item.DeductedIncome" @blur.prevent="updatefields"></td><!-- 差し引き収益  -->


          <td  class="pa-0">{{ item.TotalTime }}</td><!--  -->
          <td  class="pa-0" v-if="isShowTime"><input type="number" class="form-control" v-model.number="item.DirectTime" @blur.prevent="updatefields"></td><!--  -->
          <td  class="pa-0" v-if="isShowTime"><input type="number" class="form-control" v-model.number="item.IndirectDepartment" @blur.prevent="updatefields"></td><!--  -->
          <td  class="pa-0" v-if="isShowTime"><input type="number" class="form-control" v-model.number="item.DepartmentTime" @blur.prevent="updatefields"></td><!--  -->


          <td  class="pa-0">{{ item.PerHour }}</td>
          <td  class="pa-0">{{ item.PretaxProfit }}</td>
          <td  class="pa-0">{{ item.PretaxMargin }}</td>
        </tr>


        <tr>
          <td  class="pa-0">京都ビジネスイノベーション3課</td>
          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>


          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>
          <td  class="pa-0" v-if="isShowkouzyo" >test</td>


          <td  class="pa-0">test</td>
          <td  class="pa-0" v-if="isShowTime">test</td>
          <td  class="pa-0" v-if="isShowTime">test</td>
          <td  class="pa-0" v-if="isShowTime">test</td>


          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>
          <td  class="pa-0">test</td>
        </tr>
      </tbody>

      <v-btn class="mx-2" fab dark small color="indigo" @click="insertfields">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    </template>
  </v-simple-table>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name:'Profitability',
    data() {
      return {
        selectmonth: ['2020年10月', '2020年11月', '2020年12月'],
        // fields: this.$store.state.fields,
        isShowkouzyo:false,
        isShowTime:false
      }
    },
    computed: {
      fields(){
        console.log("出力")
        console.log(this.$store.getters.getfields)
        return this.$store.getters.getfields
      }
    },
    methods: {
      insertfields() {
        this.$store.dispatch('insertfields', { fields: this.fields })
      },
      updatefields() {
        this.$store.dispatch('updatefields', { fields: this.fields })
      },
      
    }
  }
</script>

<style>

  table {
    table-layout: fixed;
    width: 300;
  }


  td, th {
    width: 190px;
    padding: 10px 20px;
  }

  input{
    /* background-color: ; */
    width:90%;
    height:60%;
  }

</style>

