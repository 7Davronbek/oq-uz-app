<template lang="Benefits">
    <div class="Benefits">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">

                    <div class="row align-items-end">
                        <div class="col-lg-8">

                            <h1>Преимущества</h1>
                            <h2>Удобный конструктор</h2>
                            <h2>тарифов и интернет пакет</h2>

                            <a href="#">Скачать приложение</a>
                    
                            <swiper
                            :slidesPerView="3"
                            :spaceBetween="30"
                            :slidesPerGroup="3"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                            :pagination="{
                                clickable: true,
                            }"
                            :navigation="true"
                            :modules="modules"
                            class="mySwiper"
                            >
                            <swiper-slide>
                            <img src='assets/image/1.jpg' class='w-100' alt='oq' />
                        </swiper-slide>
                            <swiper-slide>
                            <img src='assets/image/1.jpg' class='w-100' alt='oq' />
                        </swiper-slide>
                            <swiper-slide>
                            <img src='assets/image/1.jpg' class='w-100' alt='oq' />
                        </swiper-slide>
                            </swiper>

                        </div>

                        <div class="col-lg-1">
                        </div>

                        <div class="col-lg-3">
                            <img src='assets/image/iphoneBig.png' class='w-100' alt='oq' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default {
    name: 'BenefitsVue',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>


<style lang="scss">
.Benefits {
    padding: 80px 0;

    .col-12 {
        background: #F5F5F5;
        border-radius: 40px;
        padding: 78px 80px 90px;
    }

    h1 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 16px;
        color: #000000;
    }

    h2 {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: #000000;
    }

    a {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        background: #000000;
        border-radius: 10px;
        padding: 20px;
        display: inline-block;
        margin: 48px 0 71px;
    }

    .swiper {

        .swiper-wrapper {
            padding-bottom: 40px;
        }
    }
    
    .swiper-button-prev {
        background-image: url('../assets/arrow-right.svg');
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        top: initial;
        bottom: 0;

        &::after {
            display: none;
        }
    }
    
    .swiper-button-next {
        background-image: url('../assets/arrow-right1.svg');
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        top: initial;
        bottom: 0;
        left: 45px;

        &::after {
            display: none;
        }
    }
    
    .swiper-slide {
        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 40px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
        }
    }
}
</style>