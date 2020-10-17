<template>
  <div class="content-area">
    {{ items }}
    <b-table stacked :items="items" :fields='fields'> </b-table>
    <div>{{ fields }}</div>
-----------------------------------


    <h2>{{ getState }}</h2>
    <button @click="onSubmit">OK</button>


  </div>
</template>

<script>
import { mapActions  } from 'vuex'

export default {
  name:'Profitability',
  data() {
    return {
      fields: this.$store.state.fields,
      // items: this.$store.state.items,
    }
  },
  computed: {
    items(){
      return this.$store.getters.getState
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log('methods')
      // this.addAddress()
      this.$store.dispatch("addAddress");
      // this.$store.dispatch("removelist");
      // alert(JSON.stringify(this.form))
    },
    ...mapActions(['addAddress']) //こいつがあるとなんかactionsを呼び出せた
  }

}
</script>

<style scoped>
.content-area {
  width: 550px;
  margin: auto;
}
</style>
