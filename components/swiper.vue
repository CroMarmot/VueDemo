<!--
  使用见 src/project/demo/swiperTest/components/index-view.vue
-->
<template>
  <swiper-vue @tap="onClick" ref="instance">
    <swiper-slide
      v-for="item in imgList"
      :key="item.index"
    >
      <img
        :src="item.url">
    </swiper-slide>
    <div
      v-show="imgList.length > 1"
      class="swiper-pagination"
      :class="[cssName]"></div>
  </swiper-vue>
</template>

<style lang="scss" rel="stylesheet/less">
.swiper-container {
  width: 100%;
  min-height: 0.2rem;
  .swiper-slide {
    border-radius: 4px;
  }
}
</style>

<script>
import SwiperSlide from './swiperSlide'
import SwiperVue from './swiperVue'

export default class swiper {
  components = { SwiperSlide, SwiperVue }
  props = {
    // 图片src列表
    imgs: {
      type: Array,
      default: () => ([])
    }
  }
  computed = {
    swiper() {
      return this.$refs.instance.swiper
    }
  }
  methods = {
    onClick() {
      this.$emit('imgClick', this.imgList[this.swiper.realIndex].index)
    },
    // swiper原始的函数
    insFunc(funcName, ...args) {
      try {
        return this.instance[funcName](...args)
      } catch (e) {
        console.error(`Swiper.${funcName}(${args})`)
        console.error(e)
      }
    },
    // swiper原始的参数
    insAttr(attrName) {
      try {
        return this.instance[attrName]
      } catch (e) {
        console.error(e)
      }
    }
  }

  computed = {
    imgList() {
      const ret = []
      const imgs = this.imgs
      if (Object.prototype.toString.call(imgs) !== '[object Array]') {
        console.warn('The imgs passed to swiper are not arrays')
        return ret
      }
      for (let i = 0; i < imgs.length; i++) {
        if (typeof imgs[i] !== 'string') {
          console.warn(`imgs[${i}] in swiper is not string`)
          continue
        }
        if (imgs[i] === '') {
          console.warn(`imgs[${i}] is empty string`)
          continue
        }
        ret.push({
          index: i,
          url: imgs[i]
        })
      }
      return ret
    }
  }
}
</script>
