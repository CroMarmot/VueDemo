<template>
  <div>
    <div style="padding-left: 0.15rem; padding-right: 0.15rem">
      <swiper ref="swiper1" :imgs="swiperData" @imgClick="swiperClick"></swiper>
      <swiper ref="swiper2" :imgs="swiperData" @imgClick="swiperClick"></swiper>
    </div>
    <h1 @click="$refs.swiper1.insFunc('slideTo', 0, 1000, false)">
      slideTo(0,1000,false)
    </h1>
    <h1 @click="$refs.swiper1.insFunc('slideToLoop', 0, 1000, false)">
      slideToLoop(0,1000,false)
    </h1>
    <h1 @click="alertRealIndex">alert(realIndex)</h1>
    <h1 @click="appendImgUrl">appendImgUrl</h1>
    <input v-model="inputval" />
    {{ swiperData.length }}
  </div>
</template>

<style lang="less" rel="stylesheet/less"></style>
<script type="text/javascript">
import Swiper from '~/components/swiper.vue'

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      inputval: '', // 模拟任何页面数据变化影响
      swiperData: [],
    }
  },
  mounted() {
    setTimeout(() => {
      this.swiperData = []
    }, 3000)
  },
  methods: {
    swiperClick(index) {
      console.log(`swiper Click${index}`)
    },
    alertRealIndex() {
      alert(this.$refs.swiper.insAttr('realIndex'))
    },
    appendImgUrl() {
      this.swiperData.push('')
    },
  },
}
</script>
