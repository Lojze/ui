import Vue from 'vue'
import App from './App.vue'
import { icon ,button} from './components/index'
Vue.config.productionTip = false


Vue.use(icon).use(button);
new Vue({
  render: h => h(App),
}).$mount('#app')
