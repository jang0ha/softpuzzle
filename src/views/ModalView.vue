<template>
    <popup-modal id="modalSendMail" ref="modalSendMail">
        <template #modal-body>
            <div>
                <p>팝업 컨텐츠</p>
                <p>팝업 컨텐츠 </p>
                <p>팝업 컨텐츠!!</p>
            </div>
        </template>
         <template #modal-footer>
            <button type="button" class="btn text-middleGray" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn fw-bolder">확인</button>
        </template>
    </popup-modal>
    <popup-modal id="modalSendMail2" ref="modalSendMail2">
        <template #modal-body>
            <div>
                <p>팝업 컨텐츠</p>
                <p>팝업 컨텐츠 </p>
                <p>팝업 컨텐츠!!</p>
            </div>
        </template>
        <template #modal-footer>
            <button type="button" class="btn text-middleGray" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn fw-bolder">확인</button>
        </template>
    </popup-modal>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: '', // 컴포넌트 이름
  components: {}, // 다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ''
    }
  },
  setup () {}, // 컴포지션Api
  created () {}, // 컴포넌트가 생성되면 실행
  mounted () {}, // templete에 정의된 html 코드가 랜더링 된 후 실행
  unmounted () {}, // unmount가 완료 된 후 실행
  methods: {} // 컴포넌트 내에서 사용할 메소드 정의
}
</script>
