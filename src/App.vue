<template>
  <v-app>
    <SideNav :drawer="drawer"/>

    <v-app-bar color="primary" dark app>
      <!-- アプリケーションバー -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>プロジェクト採算表</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <!-- フッター -->
    </v-footer>

  </v-app>
</template>
<script>
import SideNav from './components/SideNav'  

// ここから追加
export default {  
  components: {
    SideNav
  },
  data () {
    return {
      drawer: false,
      menuItems: [
        {
          name: 'Home',
          to: 'Home'
        },
        {
          name: 'Profitability',
          to: "Profitability"
        },
        {
          name: 'Study',
          to: "Study"
        },
        {
          name: '利用説明',
          to: "out"
        },
      ] 
    }
  },
  methods: {
      getCreateUrl(to) {
        if(to==='out') {
          location.href="https://www.notion.so/03f52a167ed3493d9aa5559e88e53055"
        } else {
          location.href=`${to}`
        }
      }
  }
}
// ここまで追加

</script>
 
<style></style>