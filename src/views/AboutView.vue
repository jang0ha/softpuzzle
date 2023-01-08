<template>
    <main role='main'>
        <!-- 어바웃 비쥬얼 시작 -->
        <section class="about-visual-wrap">
            <div class="about-img-wrap">
                <div><img :src="require('@/assets/images/visual-about-01.jpg')" alt="어바웃 대표이미지"></div>
                <div><img :src="require('@/assets/images/visual-about-03.jpg')" alt="어바웃 대표이미지"></div>
            </div>
            <div class="title-wrap">
                <page-title>
                    ABOUT
                </page-title>
                <sub-title>
                    근수네 퍼즐은 이런회사지요 ㅎㅎ어바웃 페이지에요
                </sub-title>
            </div>
        </section>
        <!-- 어바웃 비쥬얼 끝 -->

        <!-- 어바웃 인포 시작  -->
        <section class="about-information-wrap mt-5">
            <h2 class="title-xl w-40 m-auto text-center pt-5">
                소프트웨어 및 하드웨어의 전체 개발 과정에 대한 전문 지식과 노하우로 <strong>고객 맞춤형 원스탑 시스템</strong>을 구축하고 있습니다.
            </h2>

            <div class="about-system-img-wrap">
                <img :src="require('@/assets/images/img-about-step-01.svg')" alt="어바웃 시스템 이미지">
                <img :src="require('@/assets/images/img-about-step-02.svg')" alt="어바웃 시스템 이미지">
                <img :src="require('@/assets/images/img-about-step-03.svg')" alt="어바웃 시스템 이미지">
                <img :src="require('@/assets/images/img-about-step-04.svg')" alt="어바웃 시스템 이미지">
            </div>
        </section>
        <!-- 어바웃 인포 끝  -->

        <!-- 어바웃 프로세스 시작  -->
        <section class="about-process-wrap">
            <div class="row g-0 justify-content-between align-items-center">
                <div class="col-auto">
                    <div class="main-about-img-container">
                        <ul>
                            <li :key="index" v-for="(process, index) in aboutProcess">
                                <img :src="require(`@/assets/images/${process.processImg}.svg`)" alt="어바웃 스텝 이미지" />
                                <strong>{{process.processTitle}}</strong>
                                <div>
                                    <small>{{process.processList01}}</small>
                                    <small>{{process.processList02}}</small>
                                    <small>{{process.processList03}}</small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-auto">
                    <span class="horizon-line-arrow"></span>
                </div>
                <div class="col-3">
                    <ul class="about-contact-btn-wrap">
                        <li class="about-result-btn">
                            <router-link to="/contact">
                                <div class="identity insight">
                                    insight
                                </div>
                                <div class="identity contact-btn">
                                    문의하기
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- 어바웃 프로세스 끝  -->

        <!-- 어바웃 연혁 시작  -->
        <section class="about-history-wrap bg-dark">
            <h2 class="title-xl w-40 m-auto identity">
                체계적인 디지털 기술을 통해 <br>언택트 뉴노멀 시대에 진정한 <strong>IT 솔루션</strong>과<br> <strong>디지털 트렌드</strong>를 제공합니다.
            </h2>

            <div class="about-history-container">
                <ul class="history-list vstack align-items-center">
                    <li :key="index" v-for="(history, index) in aboutHistory" :index="index" :class="{'active':index === 1 }">
                        <div class="history-line">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="500" viewBox="0 0 5 500" fill="none">
                                <line x1="2.5" y1="2.5" x2="2.49998" y2="500.5" stroke="#EEEEEE" stroke-width="5" stroke-linecap="round" />
                            </svg>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="5" height="500" viewBox="0 0 5 500" fill="none" id="line">
                                <line x1="2.5" y1="2.5" x2="2.49998" y2="500.5" stroke-width="5" stroke-linecap="round" />
                            </svg> -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="219" height="392" viewBox="0 0 219 392" fill="none">
                                <path d="M75 4.5C41.6667 43.5 -17.3 135.5 13.5 191.5C52 261.5 219.5 182 213.5 275C208.7 349.4 129.5 380.667 90.5 387" stroke="#F4F4F4" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                <g>
                                    <g class="cls-4">
                                        <path class="cls-1" d="M.06,0V12c29.81,.03,53.97,24.19,54,54v60h12v-60C66.02,29.57,36.49,.04,.06,0" fill="#fff" />
                                    </g>
                                    <path id="line" d="M.06,5.89s35.76,1,50.83,28.83c4.33,7.67,9.33,17.5,9.17,23.17s0,68.11,0,68.11" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" stroke="#F4F4F4" />
                                </g>
                            </svg> -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="219" height="392" viewBox="0 0 219 392" fill="none" id="line">
                                <path d="M75 4.5C41.6667 43.5 -17.3 135.5 13.5 191.5C52 261.5 219.5 182 213.5 275C208.7 349.4 129.5 380.667 90.5 387" stroke="F4F4F4" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg> -->
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="_레이어_2" viewBox="0 0 66.06 126.01">
                                <defs>
                                    <clipPath id="clippath">
                                        <rect class="cls-3" x=".06" width="66" height="126" />
                                    </clipPath>
                                </defs>
                                <g id="_레이어_1-2">
                                    <g>
                                        <g class="cls-4">
                                            <path class="cls-1" d="M.06,0V12c29.81,.03,53.97,24.19,54,54v60h12v-60C66.02,29.57,36.49,.04,.06,0" fill="#fff" />
                                        </g>
                                        <path id="line" d="M.06,5.89s35.76,1,50.83,28.83c4.33,7.67,9.33,17.5,9.17,23.17s0,68.11,0,68.11" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="126" viewBox="0 0 66 126">

                                <!-- <g data-name="그룹 2649">
                                    <g data-name="그룹 2641">
                                        <g data-name="그룹 2597" style="clip-path:url(#4b8obz4hna)">
                                            <path data-name="패스 16247" d="M0 0v12a54.061 54.061 0 0 1 54 54v60h12V66A66.074 66.074 0 0 0 0 0" style="fill:#fff" />
                                        </g>
                                    </g>
                                    <g data-name="그룹 2642">
                                        <g data-name="그룹 2640" transform="translate(0 4.027)" style="clip-path:url(#tn2uypdyob)">
                                            <path id="line" data-name="패스 16272" d="M60.4 119.969v-59C60.4 27.35 33.3 0 0 0" transform="translate(0 2.004)" fill="#dddd" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </g> -->
                                <!-- <g>
                                        <g class="cls-5">
                                            <path class="cls-1" d="M0,0V12c29.81,.03,53.97,24.19,54,54v60h12v-60C65.96,29.57,36.43,.04,0,0" />
                                        </g>
                                        <g class="cls-4">
                                            <path class="cls-2" d="M60.4,126v-59C60.4,33.38,33.3,6.03,0,6.03" fill="#ddd" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" id="line" />
                                        </g>
                                    </g> -->
                                <!-- 그가 준거 -->
                                <!-- <g>
                                    <path class="cls-1" d="M66,126h-12v-60c-.03-29.81-24.19-53.97-54-54V0C36.43,.04,65.96,29.57,66,66v60Z" fill="#fff" />
                                    <path class="cls-2" d="M60,126v-58.9C60,33.54,33.08,6.24,0,6.24" fill="#ddd" stroke-width="4" stroke-linecap="round" id="line"/>
                                </g> -->
                                <!-- 내가 한거 -->
                                <!-- <g>
                                    <path class="cls-1" d="M66.13,126h-12v-60C54.09,36.19,29.94,12.03,.13,12V0C36.56,.04,66.08,29.57,66.13,66v60Z" fill="#fff" />
                                    <path class="cls-2" d="M.13,5.57s35.95,2.27,49.58,26.62c3.14,5.2,9.21,14.53,10.42,28.69V125.33" fill="#ddd" stroke-width="4" stroke-linecap="round" id="line" />
                                </g> -->
                                <!-- 내가한거 2 -->
                                <g>
                                    <path class="cls-1" d="M66,126h-12v-60c-.03-29.81-24.19-53.97-54-54V0C36.43,.04,65.96,29.57,66,66v60Z" fill="#fff" />
                                    <path class="cls-2" d="M0,5.06c32.08,0,58.32,24.95,60.41,56.5,.09,1.34,.15,2.7,.15,4.06v60.38" fill="#ddd" stroke-width="4" stroke-linecap="round" id="line" />
                                </g>
                            </svg>
                            <!-- <svg id="_레이어_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 126">
                                <defs>
                                    <clipPath id="clippath">
                                        <rect class="cls-3" width="66" height="126" />
                                    </clipPath>
                                    <clipPath id="clippath-1">
                                        <rect class="cls-3" y="4.03" width="62.41" height="121.97" />
                                    </clipPath>
                                </defs>
                                <g id="_레이어_1-2">
                                    <g>
                                        <g class="cls-5">
                                            <path class="cls-1" d="M0,0V12c29.81,.03,53.97,24.19,54,54v60h12v-60C65.96,29.57,36.43,.04,0,0" />
                                        </g>
                                        <g class="cls-4">
                                            <path class="cls-2" d="M60.4,126v-59C60.4,33.38,33.3,6.03,0,6.03" fill="#ddd" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" id="line" />
                                        </g>
                                    </g>
                                </g>
                            </svg> -->
                        </div>
                        <div class="history-year ">
                            <p>2021</p>
                        </div>
                        <div class="history-year-content">
                            <div class="position-relative">
                                <p class="year">2021</p>
                                <ul>
                                    <li>삼성전자 스마트폰 Spec APP CMS 고도화</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 어바웃 연혁 끝  -->
    </main>
</template>
<script>
    export default {
        name: '', // 컴포넌트 이름
        components: {

        }, // 다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        data() { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                aboutProcess: [{
                    processImg: 'icon-about-step-01',
                    processTitle: 'Strategy',
                    processList01: '브랜드 경험 구축',
                    processList02: 'UI / UX 컨설팅',
                    processList03: ''
                }, {
                    processImg: 'icon-about-step-02',
                    processTitle: 'Design',
                    processList01: 'UI / UX 디자인 시스템',
                    processList02: 'GUI 디자인',
                    processList03: '브랜딩'
                }, {
                    processImg: 'icon-about-step-03',
                    processTitle: 'Develope',
                    processList01: '웹 / 앱시스템 구축',
                    processList02: '웹표준, 웹접근성',
                    processList03: '크로스브라우징'
                }, {
                    processImg: 'icon-about-step-04',
                    processTitle: 'Maintenance',
                    processList01: '유지보수 관리',
                    processList02: '운영 컨설팅',
                    processList03: '시스템 관리'
                }],

                aboutHistory: [{
                        historyYear: '2021',
                        historyList01: 'U+00B7; 삼성전자 스마트폰 Spec APP CMS 고도화',
                        historyList02: '아카테미 학원관리 시스템 개발',
                        historyList03: '콘테스트 등록/관리 플랫폼 G컨테스트 개발',
                        historyList04: '삼성페이 연동 개발 용역',
                        historyList05: '투약관리 플랫폼 약꾹 개발',
                        historyList06: '(주)더볼 피부 분석용 데이터 수집 앱 및 관리시스템 개발',
                        historyList07: 'RSE(rear seat entertainment) 고도화 개발'
                    },
                    {
                        historyYear: '2020',
                        historyList01: 'U+00B7; 삼성전자 스마트폰 Spec APP CMS 고도화',
                        historyList02: '아카테미 학원관리 시스템 개발',
                        historyList03: '콘테스트 등록/관리 플랫폼 G컨테스트 개발',
                        historyList04: '삼성페이 연동 개발 용역',
                        historyList05: '투약관리 플랫폼 약꾹 개발',
                        historyList06: '(주)더볼 피부 분석용 데이터 수집 앱 및 관리시스템 개발',
                        historyList07: 'RSE(rear seat entertainment) 고도화 개발'
                    },
                    {
                        historyYear: '2019',
                        historyList01: 'Tutto 골프장 예약 플랫폼 개발',
                        historyList02: '미래엔 영업관리 시스템 개발',
                        historyList03: '미래엔 에듀케어 학원관리시스템 개발',
                        historyList04: 'RSE(rear eat entertainment) 개발',
                        historyList05: '도아팩토리 에디터 및 사진인화 플랫폼 개발',
                        historyList06: '러시아 쇼핑몰 플랫폼 개발',
                        historyList07: '아주대학교 교수학습개발센터 고도화 개발',
                        historyList08: '퍼스널케어 플랫폼 개발',
                        historyList09: '직구 정보제공 플랫폼 딤섬 개발',
                        historyList10: '아기 수면교육 플랫폼 알잠 고도화 개발',
                        historyList11: '삼성전자 갤럭시 시리즈 스펙앱 관리시스템 개발',
                        historyList12: '삼성전자 심박관리 S-patch PC-tool 및 앱 개발'
                    },
                    {
                        historyYear: '2018',
                        historyList01: '모바일 쇼핑몰 플랫폼 서비스',
                        historyList02: '이케아 KOREA 전사 사이트 운영',
                        historyList03: '현대u&i EMS 시스템',
                        historyList04: '물순환 생태도시 전시관 - 세종시',
                        historyList05: '모디플레이-럭스로보',
                        historyList06: '제일기획 - Galaxy S9 Unpacked',
                        historyList07: 'KiZM ERP : 출판 공정 ERP',
                        historyList08: '이케아 CMS 시스템 개발',
                        historyList09: '메디플러스솔루션 - 세컨드윈드',
                        historyList10: 'LG전자 - O2O 서비스',
                        historyList11: '아이팡코리아 - 올레팡'
                    },
                    {
                        historyYear: '2017',
                        historyList01: '아주대학교 교수학습 개발센서 기능개선 유지보수',
                        historyList02: '비지니스 인사이트 유지보수',
                        historyList03: '출판 ERP',
                        historyList04: 'LG전자 O2O서비스 APP',
                        historyList05: '펀플워크 FUNPLE 사장님 APP',
                        historyList06: 'KT 만성질환관리 서비스 APP',
                        historyList07: 'KT 스마트밴드 II APP',
                        historyList08: '인바디 바디키 챌린지 APP',
                        historyList09: '인바디 영바디키 APP',
                        historyList10: '인바디 이지트레이닝 APP',
                        historyList11: '위메프 커핑(CUPPING) APP'
                    }
                ],
                even: 1, // 짝수
                odd: 0 // 홀수

            }
        },
        setup() {}, // 컴포지션Api
        created() {}, // 컴포넌트가 생성되면 실행
        mounted() {}, // templete에 정의된 html 코드가 랜더링 된 후 실행
        unmounted() {}, // unmount가 완료 된 후 실행
        methods: {
            // 라인/년도 활성화 애니메이션
            historyFunction: function (index) {
                // const cols = document.querySelectorAll('.history-list li')
                // const odd = index % 2 == 1 // 홀수
                // const even = index % 2 == 0 // 짝수
                // let index = e.target.getAttribute('index');
                // if(index === this.aboutHistory.length)

                // if (cols[index] == odd) {
                //     cols.querySelector('.history-year-content').classList.add("right");
                // }
                // if (cols[index] == even) {
                //     cols.querySelector('.history-year-content').classList.add("left");
                // }
            }
        } // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>
