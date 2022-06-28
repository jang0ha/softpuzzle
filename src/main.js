import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 스타일 scss/js
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/scss/bootstrap.scss'
// import './assets/scss/style.scss'
// import './assets/scss/common.scss'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'


createApp(App).use(store).use(router).mount('#app')

