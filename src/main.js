import Vue from 'vue'
import App from './App'
import Toast from './libs/toast'
Vue.config.productionTip = false
import './libs/toast/toast.css';
Vue.use(Toast)
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
