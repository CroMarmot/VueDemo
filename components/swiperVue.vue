<template>
  <div class="swiper-container">
    <slot name="parallax-bg"></slot>
    <div :class="classes.wrapperClass">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-prev"></slot>
    <slot name="button-next"></slot>
    <slot name="scrollbar"></slot>
  </div>
</template>

<script>
// require sources
import Swiper from 'swiper'

const DEFAULT_EVENTS = [
  'beforeDestroy',
  'slideChange',
  'slideChangeTransitionStart',
  'slideChangeTransitionEnd',
  'slideNextTransitionStart',
  'slideNextTransitionEnd',
  'slidePrevTransitionStart',
  'slidePrevTransitionEnd',
  'transitionStart',
  'transitionEnd',
  'touchStart',
  'touchMove',
  'touchMoveOpposite',
  'sliderMove',
  'touchEnd',
  'click',
  'tap',
  'doubleTap',
  'imagesReady',
  'progress',
  'reachBeginning',
  'reachEnd',
  'fromEdge',
  'setTranslate',
  'setTransition',
  'resize',
]

// export
export default {
  name: 'Swiper',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      swiper: null,
      classes: {
        wrapperClass: 'swiper-wrapper',
      },
    }
  },
  ready() {
    if (!this.swiper) {
      this.mountInstance()
    }
  },
  mounted() {
    if (!this.swiper) {
      let setClassName = false
      for (const className in this.classes) {
        if (Object.hasOwnProperty.call(this.classes, className)) {
          if (this.options[className]) {
            setClassName = true
            this.classes[className] = this.options[className]
          }
        }
      }
      setClassName ? this.$nextTick(this.mountInstance) : this.mountInstance()
    }
  },
  activated() {
    this.update()
  },
  updated() {
    this.update()
  },
  beforeDestroy() {
    this.$nextTick(function () {
      if (this.swiper) {
        this.swiper.destroy && this.swiper.destroy()
        delete this.swiper
      }
    })
  },
  methods: {
    update() {
      if (this.swiper) {
        this.swiper.update && this.swiper.update()
        this.swiper.navigation && this.swiper.navigation.update()
        this.swiper.pagination && this.swiper.pagination.render()
        this.swiper.pagination && this.swiper.pagination.update()
      }
    },
    mountInstance() {
      const swiperOptions = Object.assign({}, this.globalOptions, this.options)
      this.swiper = new Swiper(this.$el, swiperOptions)
      this.bindEvents()
      this.$emit('ready', this.swiper)
    },
    bindEvents() {
      const vm = this
      DEFAULT_EVENTS.forEach((eventName) => {
        this.swiper.on(eventName, function () {
          vm.$emit(eventName, ...arguments)
          vm.$emit(
            eventName.replace(/([A-Z])/g, '-$1').toLowerCase(),
            ...arguments
          )
        })
      })
    },
  },
}
</script>
