import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
    
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXYdSputNwYRsSJkTr3FZ1AdHT5f7hGzs",
  authDomain: "my-address-pj-96b18.firebaseapp.com",
  databaseURL: "https://my-address-pj-96b18.firebaseio.com",
  projectId: "my-address-pj-96b18",
  storageBucket: "my-address-pj-96b18.appspot.com",
  messagingSenderId: "374701743595",
  appId: "1:374701743595:web:33fb79310e889e40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
