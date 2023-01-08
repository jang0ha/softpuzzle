<template>
    <main role='main'>
        <section class="contact-wrap">
            <div class="row g-0 justify-content-between">
                <div class="col-6">
                    <div class="contact-img-wrap">
                        <div class="contact-img">
                            <img :src="require(`@/assets/images/visual-contact.png`)" alt="문의하기 대표이미지">
                        </div>
                        <div class="title-wrap">
                            <page-title>CONTACT</page-title>
                            <sub-title>안녕 디지몬~ 내꿈을 꾸면서 잠이들래~~ 안녕 디지몬~ 친구들 모두 안녕~~</sub-title>
                        </div>

                    </div>
                </div>
                <div class="col-5 mt-5 pt-5 offset-lg-1">
                    <form action="" autocomplete="off">
                        <fieldset>
                            <div class="mb-3">
                                <label for="formName" class="form-label">이름</label>
                                <input type="text" :class="{'form-control' : true,  'is-invalid': formNameValue  === invalid}" id="formName" aria-describedby="formName" v-model="formNameValue">

                                <div class="invalid-feedback" id="nameInvalidFeedback">
                                    이름을 입력해주세요.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="formEmail" class="form-label">이메일</label>
                                <input type="email" :class="{'form-control' : true,  'is-invalid': formEmailValue === invalid }" id="formEmail" aria-describedby="formEmail" v-model="formEmailValue">
                                <div class="invalid-feedback" id="emailInvalidFeedback">
                                    이메일을 입력해주세요.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="formTextarea" class="form-label">문의내용</label>
                                <textarea :class="{'form-control' : true,  'is-invalid': formQuestionValue === invalid }" rows="8" id="formTextarea" v-model="formQuestionValue"></textarea>
                                <div class="invalid-feedback" id="nameInvalidFeedback">
                                    문의내용을 입력해주세요.
                                </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" :class="{'form-check-input' : true,  'is-invalid': formPrivacyValue === invalid }" id="formCheckPrivacy" v-model="formPrivacyValue">
                                <label class="form-check-label" for="formCheckPrivacy">개인정보 이용 동의</label>
                                <div class="invalid-feedback" id="nameInvalidFeedback">
                                    이용약관을 확인해주세요.
                                </div>
                            </div>
                        </fieldset>
                        <!-- <div class="mt-5"><button type="button" class="btn btn-dark px-5" @click="checkForm()">SEND</button></div> -->
                        <div class="mt-5"><button type="button" class="btn btn-dark px-5" data-bs-target="#modalSendMail" data-bs-toggle="modal">SEND</button></div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <popup-modal id="modalSendMail" ref="modalSendMail">
        <template #modal-body>
            <div>
                <p>팝업 컨텐츠</p>
                <p>팝업 컨텐츠 </p>
                <p>팝업 컨텐츠!!</p>
            </div>
        </template>

    </popup-modal>
    <!-- <popup-modal id="modalSendMail" ref="modalSendMail">
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
    </popup-modal> -->
</template>

<script>
export default {
  name: '', // 컴포넌트 이름
  components: {}, // 다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      invalid: '', // 폼 유효성 값
      formNameValue: null, // 폼 이름 벨류
      formEmailValue: null, // 폼 이메일 벨류
      formQuestionValue: null, // 폼 질문 벨류
      formPrivacyValue: null, // 폼 개인정보 이용동의 벨류

      modalShow: false // 모달 상태값
    }
  },
  setup () {}, // 컴포지션Api
  created () {}, // 컴포넌트가 생성되면 실행
  mounted () {}, // templete에 정의된 html 코드가 랜더링 된 후 실행
  unmounted () {}, // unmount가 완료 된 후 실행
  methods: {
    checkForm: function (e) {
      //  폼 값이 모두 있을때
      if (this.formNameValue && this.formEmailValue && this.formQuestionValue && this.formPrivacyValue) {
        // return true;
        // alert("전송이 완료되었습니다. 빠른시일내로 답변드리겠습니다.");
        // const myModal = new bootstrap.Modal('#modalSendMail', {
        //     keyboard: false
        // })
        // myModal.show();

        // const modalToggle = document.getElementById('modalSendMail')
        // const myModal = new bootstrap.Modal('#myModal', {
        //   keyboard: false
        // })
        myModal.show(modalToggle)
      }
      // 폼 이름 값 유무 체크
      if (!this.formNameValue) {
        this.formNameValue = this.invalid
      }
      // 폼 이메일 값 유무 체크
      if (!this.formEmailValue) {
        this.formEmailValue = this.invalid
      }
      // 폼 문의내용 값 유무 체크
      if (!this.formQuestionValue) {
        this.formQuestionValue = this.invalid
      }
      // 폼 개인정보 이용동의 값 유무 체크
      if (!this.formPrivacyValue) {
        this.formPrivacyValue = this.invalid
      }

      e.preventDefault()
    }
  } // 컴포넌트 내에서 사용할 메소드 정의
}
</script>
