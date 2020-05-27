import Vue from 'vue'
import App from './App.vue'
import { icon} from './components/index'
Vue.config.productionTip = false


Vue.use(icon);
new Vue({
  render: h => h(App),
}).$mount('#app')
