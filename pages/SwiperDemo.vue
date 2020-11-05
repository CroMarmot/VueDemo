<template>
  <div ref="container" class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
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
      direction: 'horizontal',
      loop: true,

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

<style lang="scss">
@import 'swiper/swiper-bundle.min.css';

.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
