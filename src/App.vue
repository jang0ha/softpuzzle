<template>
    <div id="wrap">
        <Header />
        <Content />
        <Footer />
        <ModalView />
    </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Content from './components/layout/Content.vue'
import Footer from './components/layout/Footer.vue'
import ModalView from './views/ModalView.vue'
export default {
  components: {
    Header, Footer, Content, ModalView
  } // 다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
}
</script>
