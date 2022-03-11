import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/swiper-bundle.css";

import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'
import SwiperCore, {
  EffectFade,
  Pagination,
  Navigation,
  Autoplay,
  Scrollbar
} from "swiper/core";

SwiperCore.use([EffectFade, Pagination, Autoplay, Navigation, Scrollbar]);

Vue.use(VueAwesomeSwiper)

Vue.component(Swiper)
Vue.component(SwiperSlide)
