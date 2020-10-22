<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center" width='11%'>名前</th>
          <th class="text-center" width='11%'>国語</th>
          <th class="text-center" width='11%'>数学</th>
          <th class="text-center" width='11%'>英語</th>
          <th class="text-center" width='11%'>理科</th>
          <th class="text-center" width='11%'>社会</th>
          <th class="text-center" width='11%'>合計</th>
          <th class="text-center" width='11%'>平均値</th>
          <th class="text-center" width='11%'>標準偏差</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in fields"
          :key="item.name"
        >
          <td width='11%'><input type="text"   class="form-control" v-model="item.name"></td>
          <td width='11%'><input type="number" class="form-control" v-model.number="item.japanese" @blur.prevent="updatefields"></td>
          <td width='11%'><input type="number" class="form-control" v-model.number="item.mathematics" @blur.prevent="updatefields"></td>
          <td width='11%'><input type="number" class="form-control" v-model.number="item.english" @blur.prevent="updatefields"></td>
          <td width='11%'><input type="number" class="form-control" v-model.number="item.science" @blur.prevent="updatefields"></td>
          <td width='11%'><input type="number" class="form-control" v-model.number="item.history" @blur.prevent="updatefields"></td>
          <td width='11%'>{{ item.sum }}</td>
          <td width='11%'>{{ item.average }}</td>
          <td width='11%'>{{ item.stdev }}</td>
        </tr>
        <tr>
          <td width='11%'>京都ビジネスイノベーション3課</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
          <td width='11%'>test</td>
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
  name:'Study',
    data() {
      return {
        // fields: this.$store.state.fields,
      }
    },
    computed: {
      fields(){
        return this.$store.getters.getfields
      }
    },
    methods: {
      insertfields() {
        console.log('methods')
        this.$store.dispatch('insertfields', { fields: this.fields })
      },
      updatefields() {
        this.$store.dispatch('updatefields', { fields: this.fields })
      },
      
    }
  }
</script>

<style>
  input{
    background-color: #00ff00;
    width:100%;
  }
</style>

