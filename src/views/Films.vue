<template>
  <div>
    <swiper class="swiper">
      <div class="swiper-slide">
        <img src="../../public/img/slide-pic1.jpg" />
      </div>
      <div class="swiper-slide"><img src="../../public/img/slide-pic2.jpg" /></div>
      <div class="swiper-slide"><img src="../../public/img/slide-pic3.jpg" /></div>
    </swiper>
    <tabsbar class="tabs-bar"></tabsbar>
    <router-view />
  </div>
</template>
<script>

import swiper from '../components/Films/Swiper'
import tabsbar from '../components/Films/Tabsbar'
export default {
  components: {
    swiper,
    tabsbar
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
}
.tabs-bar {
  margin-top: 2rem;
  height: 3rem;
  background: white;
}
</style>
