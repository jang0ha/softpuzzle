<template>
    <div id='header-block'>
        <header>
            <nav class="navbar navbar-expand-lg justify-content-between">
                <div class="container">
                    <h1 class="navbar-brand  identity">
                        <router-link to="/">
                            <!-- SoftPuzzle -->
                            박근수 퍼즐
                        </router-link>
                    </h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/about">소개</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about">소개</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about">소개</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about">소개</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/">소개</router-link>
                            </li>
                        </ul>
                        <ul>
                            <li class="nav-item">
                                <router-link to="/contact" class="btn btn-dark px-4">문의하기</router-link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
    export default {
        // data:{
        //     isActive:true,
        // },
        // watch: {
        //     isModalVisible: function () {
        //         if (this.isModalVisible) {
        //             document.documentElement.style.overflow = 'hidden'
        //             return
        //         }
        //         document.documentElement.style.overflow = 'auto'
        //     }
        // }
    }
</script>
