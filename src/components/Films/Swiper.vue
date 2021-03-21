
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }

}
</script>
<style lang="scss" scoped>
.swiper-container {
  margin-top: 1.5rem;
  // --swiper-theme-color: #ff6600;
  // --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>
