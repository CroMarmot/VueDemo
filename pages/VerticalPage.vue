<template>
  <div ref="container" class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide slide1">Slide 1</div>
      <div class="swiper-slide slide2">Slide 2</div>
      <div class="swiper-slide slide3">Slide 3</div>
      ...
    </div>
    <!-- If we need pagination -->
    <div ref="pagination" class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div ref="scrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script>
// Import Swiper and modules
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper'

// Install modules
Swiper.use([Navigation, Pagination, Scrollbar])

// Import Swiper styles
export default {
  components: {},
  data() {
    return {
      mySwiper: null,
    }
  },
  mounted() {
    this.mySwiper = new Swiper(this.$refs.container, {
      // Optional parameters
      direction: 'vertical', // 'horizontal',
      loop: false,

      // If we need pagination
      pagination: {
        el: this.$refs.pagination,
      },

      // Navigation arrows
      navigation: {
        nextEl: this.$refs.next,
        prevEl: this.$refs.prev,
      },

      // And if we need scrollbar
      scrollbar: {
        el: this.$refs.scrollbar,
      },
    })
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'swiper/swiper-bundle.min.css';
.swiper-container {
  height: 100vh;
  width: 100vw;
}
.slide1 {
  background-color: lightyellow;
}
.slide2 {
  background-color: green;
}
.slide3 {
  background-color: blue;
}
</style>
