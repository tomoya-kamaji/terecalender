<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" light = true>
      <v-list-item>
        <v-list-item-title class="title">
          
        </v-list-item-title>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" @click="getCreateUrl(item.to)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app>
      <!-- アプリケーションバー -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>成績表</v-toolbar-title>
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

// ここから追加
export default {
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