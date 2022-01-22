import Vue from 'vue'
import App from './App.vue'
import vuescrollto from './components/plugins/vue-scrollto';
import './main.scss'

Vue.config.productionTip = false

new Vue({
  vuescrollto,
  render: h => h(App),
}).$mount('#app')
