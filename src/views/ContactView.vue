<template>
    <div id='content-block' class='contact'>
        <div class='container'>
            <div class='mt-5 pt-5'>
                <div class="position-reiative bg-dark0">
                    <div class="map-wrap">
                        <img src="" alt="">
                    </div>
                    <div class="message-wrap">
                        <form action="" autocomplete="off">
                            <fieldset>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">Name</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                            </fieldset>
                            <button class="btn btn-dark px-4">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '', //컴포넌트 이름 
        components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {}, // 컴포지션Api
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //templete에 정의된 html 코드가 랜더링 된 후 실행 
        unmounted() {}, //unmount가 완료 된 후 실행
        methods: {}, //컴포넌트 내에서 사용할 메소드 정의
    }
</script>
