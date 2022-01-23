import Vue from 'vue';
import router from './router.js';
import App from './App.vue';
import vuescrollto from './components/plugins/vue-scrollto';
import './main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuescrollto,
  render: h => h(App),
}).$mount('#app')
