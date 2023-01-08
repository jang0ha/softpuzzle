import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 전역 컴포넌트 로드
import SubTitle from './components/contents/SubTitle'
import PageTitle from './components/contents/PageTitle'
import Modal from './components/popup/Modal'

// 부트 스트랩
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'gsap/all.js'

// 스타일 css
import './assets/scss/style.scss'

// import './assets/scss/bootstrap.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/scss/bootstrap.scss'
// import './assets/scss/style.scss'
// import './assets/scss/common.scss'

// // 전역 컴포넌트 등록
// // app.component(사용할 시 호출할 이름, 등록할 컴포넌트)

createApp(App)
  .use(store)
  .use(router)
  .component('page-title', PageTitle)
  .component('sub-title', SubTitle)
  .component('popup-modal', Modal)
  .mount('#app')
