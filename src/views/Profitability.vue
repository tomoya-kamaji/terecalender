<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-right">名前</th>
          <th class="text-right">国語</th>
          <th class="text-right">数学</th>
          <th class="text-right">英語</th>
          <th class="text-right">理科</th>
          <th class="text-right">社会</th>
          <th class="text-right">合計</th>
          <th class="text-right">平均値</th>
          <th class="text-right">標準偏差</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in fields"
          :key="item.name"
        >
          <td><input type="text" style="width:100%" class="form-control" v-model="item.name"></td>
          <td><input type="number" style="width:100%" class="form-control" v-model.number="item.japanese" @blur.prevent="updatefields"></td>
          <td><input type="number" style="width:100%" class="form-control" v-model.number="item.mathematics" @blur.prevent="updatefields"></td>
          <td><input type="number" style="width:100%" class="form-control" v-model.number="item.english" @blur.prevent="updatefields"></td>
          <td><input type="number" style="width:100%" class="form-control" v-model.number="item.science" @blur.prevent="updatefields"></td>
          <td><input type="number" style="width:100%" class="form-control" v-model.number="item.history" @blur.prevent="updatefields"></td>
          <td>{{ item.sum }}</td>
          <td>{{ item.average }}</td>
          <td>{{ item.stdev }}</td>
          
          <!-- <td v-if=false v-on:dblclick="isEditName = true">{{ item.stdev }}</td>
          <td v-else><input type="text" class="form-control" v-model="item.stdev" ></td> -->
        
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name:'Profitability',
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
      updatefields() {
        console.log(this.fields)
        this.$store.dispatch('updatefields', { fields: this.fields })
      },
    }
  }
</script>

