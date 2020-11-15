<template>
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
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" @click="getCreateUrl(item.to) ">
          <!-- <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <v-btn class="mx-2" fab dark small color="indigo" @click="insertlink">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      
      <v-btn class="mx-2" fab dark small color="indigo" @click="insertlink">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn> -->
    
    <!-- ダイアログ組織を追加する -->
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          +
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
        </v-card-title>

        <v-col
          cols="12"
          sm="10"
          md="10"
        >
        <v-text-field
          label="組織"
          required
          v-model="organization"
        ></v-text-field>
        </v-col>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="insertlink"
          >
            決定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-navigation-drawer>
    
</template>

<script>

export default {
  props:[
    "drawer" //親コンポーネントであるApp.vueから値を受け渡されている
  ],
  
  data () {
    return {
      dialog: false,
      organization:"",
      select: [
      ],
    }
  },
  methods: {
      insertlink(){
        this.dialog = false,
        this.$store.dispatch('insertlink', this.organization)
      },
      //外部リンクの読み込み
      getCreateUrl(to) {
        if(to==='out') {
          location.href="https://www.notion.so/03f52a167ed3493d9aa5559e88e53055"
        } else {
          location.href=`${to}`
        }
      }
  },

  computed: {
      menuItems(){
        return this.$store.getters.getmenuItems
      }
  },
}

</script>