import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDFX2iT4tL0u-01_A9pZqUq1DxIhhUqT7g",
  authDomain: "profitability-2a66f.firebaseapp.com",
  databaseURL: "https://profitability-2a66f.firebaseio.com",
  projectId: "profitability-2a66f",
  storageBucket: "profitability-2a66f.appspot.com",
  messagingSenderId: "987517668796",
  appId: "1:987517668796:web:10fb15693c042adc2fafb9",
  measurementId: "G-CRJYPTPHT9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
