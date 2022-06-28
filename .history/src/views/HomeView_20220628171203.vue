<template>
    <main class="main" role="main">
        <section class="main-visual">
            <div id="mainVisualSlide" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3500">
                <div class="carousel-inner">
                    <div :key="index" v-for="(mainVisual , index) in mainVisualList" :class="{'carousel-item': true, 'active': index === active }">
                        <div class="main-visual-img-container">
                            <img :src="require(`@/assets/images/${mainVisual.mainImg}.png`)" alt="메인 비쥬얼 이미지" />
                            <h2 class="identity main-desc">{{mainVisual.mainDesc}}</h2>
                        </div>
                        <h2 class="identity main-desc-shadow h2">{{mainVisual.mainDesc}}</h2>
                    </div>
                    <div class="carousel-contorl-wrap">
                        <button class="carousel-control-prev" type="button" data-bs-target="#mainVisualSlide" data-bs-slide="prev">
                            <span class="carousel-btn"><span class="carousel-control-prev-icon" aria-hidden="true"></span></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#mainVisualSlide" data-bs-slide="next">
                            <span class="carousel-btn"><span class="carousel-control-next-icon" aria-hidden="true"></span></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <p class="border-top pt-2 border-white w-100 h5">IT SERVICE&ensp;/&ensp;AI&ensp;/&ensp;BIG DATA&ensp;/&ensp;MOBILE&ensp;/&ensp;SECURITY&ensp;/&ensp;GOOGLE CLOUD</p>
        </section>
        <section class="main-about content-container">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h2 class="main-title mb-3 fw-bolder">SoftPuzzle</h2>
                <div class="text-center">SI 및 ITO 사업을 진행하면서 고객의 Needs를 명확히 파악하여 관련 Solution을 제공하는<br>Web / Mobile & Solution 사업을 전개하고 있습니다.</div>
            </div>

            <div class="row gap-3 mt-5 mt-lg-10 justify-content-lg-center">
                <div class="col-lg-3 px-lg-10" :key="index" v-for="(about, index) in aboutList">
                    <div class="w-100 pt-5 pe-5 ps-2 text-left border-end border-top border-diagonal">
                        <b class="mb-lg-3 d-block">{{about.aboutTitle}}</b>
                        <div class="desc">{{about.aboutDesc}}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-business content-container">
            <div class="row row-60">
                <div class="col-xxl-auto">
                    <h2 class="main-title mb-5 identity">
                        다양한 IT분야에 걸쳐<br> 축적된 경험과 노하우를 기반으로,<br>
                        기획에서 유지보수까지 사용자 필요에<br> 맞춘 서비스를 제공합니다.
                    </h2>
                    <router-link to="/about" class="btn btn-dark px-4">포트폴리오 보러가기 <i class="bi bi-arrow-up-right ms-2 me-n1"></i></router-link>
                </div>
                <div class="col-xxl m-t-30 mt-xxl-0">
                    <div class="business-img-wrap row row-0">
                        <div class="col-xl-3" :key="index" v-for="(business, index) in businessList">
                            <div class="business-img-container">
                                <img :src="require(`@/assets/images/${business.businessImg}.png`)" alt="메인 비쥬얼 이미지" />
                                <div class="title">{{business.businessTitle}}</div>
                                <div class="over-container">
                                    <div class="over-content">
                                        <div class="title d-none d-xl-block">{{business.businessTitle}}</div>
                                        <div class="desc">{{business.businessDesc}}</div>
                                        <div class="desc m-t-20  d-none d-xl-block">{{business.businessDesc2}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-descSection content-container">
            <div class="row g-5">
                <div class="col-lg-5 offset-lg-1">
                    <div class="ml-lg-6 ms-0 ps-5 border-start border-dark">
                        <h2 class="main-title mb-5">
                            IT 친화적인 구조
                        </h2>
                        <div class="">
                            소프트 퍼즐만의 데이터 연동, 응용, 관리 기술을 통해 다양한,<br>사용자들에게 맞춤형 서비스를 제공할 수 있으며<br> 사용자 중심의 지속가능한 체계화된 솔루션을 제공 받을 수 있습니다.
                        </div>
                            <router-link to="/about" class="btn btn-dark px-4 mt-5">소프트퍼즐 알아보기<i class="bi bi-arrow-up-right ms-2 me-n1"></i></router-link>
                    </div>
                </div>
                <div class="col-lg mt-lg-6 mt-5">
                    <div class="mb-5" :key="index" v-for="(desc, index) in descList">
                        <p class="fw-bold mb-3 identity">{{desc.descTitle}}</p>
                        <div>{{desc.descDesc}}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-contact">
            <h2 class="main-title identity mb-3 d-none d-lg-block">
                소프트 퍼즐과 성공적인 e-비즈니스를 함께!
            </h2>
            <div class="contact-img-wrap">
                <b class="contact-desc text-white text-center">
                    소프트 퍼즐의 사업분야에 대해서 내용을 문의하시거나, 사업제휴,의견 등을 자유롭게 기재해 주세요.<br>문의하신 내용은 담당자가 정성껏 답변해 드리겠습니다.
                </b>
                <router-link to="/contact" class="btn btn-primary px-4 mt-5">문의 하기<i class="bi bi-arrow-up-right ms-2 me-n1"></i></router-link>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    @import '../assets/scss/main.scss';
</style>

<script>
    export default {
        name: '', //컴포넌트 이름 
        components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                mainVisualList: [{
                        "mainImg": "mainVisual",
                        "mainDesc": "Safer future through innovative technology.",
                    },
                    {
                        "mainImg": "mainVisual02",
                        "mainDesc": "Is Your Best business partner.",
                    },
                    {
                        "mainImg": "mainVisual03",
                        "mainDesc": "We'll make you What you need whatever for technology.",
                    }
                ],
                aboutList: [{
                        "aboutImg": "aboutImg01",
                        "aboutTitle": "SI (System Integration)",
                        "aboutDesc": "기업이 필요로 하는 시스템에 관한 분석, 구축 등 전반적인 모든 공정상의 서비스를 제공",
                    },
                    {
                        "aboutImg": "aboutImg02",
                        "aboutTitle": "ITO (IT Outsourcing)",
                        "aboutDesc": "정보화 전략을 수립, 추출된 핵심 성공요소를 근간으로 효율적인 서비스 제공",
                    },
                    {
                        "aboutImg": "aboutImg03",
                        "aboutTitle": "컨설팅 (Consulting)",
                        "aboutDesc": "컨설팅 목적과 니즈에 따라 최적의 맞춤형 컨설팅 서비스를 제공",
                    },
                ],
                businessList: [{
                        "businessImg": "business01",
                        "businessTitle": "IT SERVICE",
                        "businessDesc": " 기업의 정보시스템과 관련된 Software개발,인력,하드웨어 등의 전체(Total outsourcing) 혹은 일부(selective outsourcing)를 기획에서 유지보수까지 장기간 위탁 받아 최적의 시스템을 유지/발전시키는 서비스를 제공합니다.",
                        "businessDesc2": "     검증된 운영 노하우로 기존의 비즈니스 시스템에 모바일 기술을 결합하여 웹 환경과 동일한 서비스를 제공하며, android, IOS 등 다양한 운영체제에 적용할 수 있는 솔루션을 구현해드립니다.",
                        "businessRouter": "/about"
                    },
                    {
                        "businessImg": "business02",
                        "businessTitle": "AI / BIG DATA",
                        "businessDesc": "팩토리, 물류, 리테일 매장에서 수집되는 방대한 양의 정보를 Data Lake로 빠르게 분석하여 최적의 Insight를 도출합니다.",
                        "businessDesc2": "고객 접점에서 발생하는 영상, 이미지, 음성 등 빅데이터를 실시간 분석, 처리하여 향상된 정보보안과 사용자 경험을 제공합니다.",
                        "businessRouter": "/about"
                    },
                    {
                        "businessImg": "business03",
                        "businessTitle": "SECURITY",
                        "businessDesc": "해킹 시도에 대한 철저한 모니터링부터 분석, 대응에 이르는 체계적인 관제서비스를 제공합니다.",
                        "businessDesc2": "위험요소를 분석하고 알맞는 정보정책을 제시하며 정보 자산을 안전하게 보호하는 차별화된 보안 서비스를 제공합니다.",
                        "businessRouter": "/about"
                    },
                    {
                        "businessImg": "business04",
                        "businessTitle": "GOOGLE CLOUD",
                        "businessDesc": "배포 시간을 단축하고 안정성을 높이며 애플리케이션을 프라이빗 클라우드의 VM 인스턴스로 마이그레이션하여 최적화된 내부 서비스 제공 방식을 재창조합니다.",
                        "businessDesc2": "고성능 가상 머신을 사용하여 빠르고 유연하게, 디지털 혁신 속도를 높입니다.",
                        "businessRouter": "/about"
                    },
                ],
                descList: [{
                        "descTitle": "Value creation",
                        "descDesc": "역동적으로 변화하는 비즈니스 및 시장의 요구에 맞게 비즈니스 프로세스, 문화, 고객 환경을 조성.",
                    },
                    {
                        "descTitle": "Effective delivery",
                        "descDesc": "경영전략을 바탕으로 정보화 전략을 수립, 추출된 핵심 성공요소를 근간으로 효율적인 서비스 제공.",
                    },
                    {
                        "descTitle": "Build effective relationships",
                        "descDesc": "애플리케이션 현대화와 새로운 비즈니스 모델 수립부터 고객을 위한 새로운 제품 및 서비스 빌드.",
                    },
                    {
                        "descTitle": "Application Performance Management",
                        "descDesc": "분산추적, 서비스 메시 원격분석, 메트릭스 집계 및 시각화를 위한 올인원 솔루션을 제공.",
                    },
                ],
                active: 0 //carousel 액티브 효과
            };
        },
        setup() {}, // 컴포지션Api
        created() {}, //컴포넌트가 생성되면 실행
        mounted() {}, //templete에 정의된 html 코드가 랜더링 된 후 실행 
        unmounted() {}, //unmount가 완료 된 후 실행
        methods: {
            //carousel 액티브 효과
            setActive(index) {
                let active = index;

                if (index === this.mainVisualList.length) active = 0;
                else if (index === -1) active = this.mainVisualList.length - 1;

                this.active = active;
            }
        }, //컴포넌트 내에서 사용할 메소드 정의
    }
</script>