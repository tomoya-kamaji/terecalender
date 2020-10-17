<template>
<div id="app">
  <h1>成績表</h1>
  <p>
    <router-link to="/profitability">Go to Foo</router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data () {
    return {
      items: [
      ]
    }
  },
};
</script>
