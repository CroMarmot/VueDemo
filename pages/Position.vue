<template>
  <div ref="container" class="swiper-container">
    <div class="box1">
      <div id="box2" class="box2">
        <div class="box3" @touchmove="touchP"></div>
        <div class="box3" @touchmove="touchP"></div>
        <div class="box3" @touchmove="touchP"></div>
        <div class="box3" @touchmove="touchP"></div>
      </div>
    </div>
    <h5>clientY 显示界面顶部距离</h5>
    <h5>pageY 顶部div距离</h5>
    <h5>screenY 电脑屏幕屏幕顶部距离 包括 书签栏甚至浏览器窗口移动</h5>
    <button @click="getBox2">get box2 offsets</button>
    <h5>clientTop 相当于border</h5>
    <h5>clientHeight 内容+padding，无border</h5>
    <h5>
      offsetTop 当前元素左上角相对于
      element.offsetParent节点的左边界偏移的像素值,到自己的border最外及以内
    </h5>
    <h5>offsetHeight 当前元素高度，不包括自己的margin</h5>
    <h5>scrollTop 自身content可以滚动时，滚动的距离</h5>
    <h5>scrollHeight 自身的content可以滚动时，滚动的总长度</h5>
    <h3>以上是纵向，横向同理</h3>
  </div>
</template>

<script>
// Import Swiper styles
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    touchP(e) {
      e.preventDefault()
      console.log(
        JSON.stringify({
          clientY: e.touches[0].clientY,
          pageY: e.touches[0].pageY,
          screenY: e.touches[0].screenY,
          targetOffsetTop: e.target.offsetTop,
        })
      )
    },
    getBox2() {
      const box2 = document.getElementById('box2')
      console.table({
        clientTop: box2.clientTop,
        clientHeight: box2.clientHeight,
        offsetTop: box2.offsetTop,
        offsetHeight: box2.offsetHeight,
        scrollTop: box2.scrollTop,
        scrollHeight: box2.scrollHeight,
      })
    },
  },
}
</script>

<style lang="scss">
@import 'swiper/swiper-bundle.min.css';

.swiper-container {
  width: 100%;
  height: 200vh;
  background-color: lightgreen;
  .box1 {
    box-sizing: border-box;
    padding: 50px;
    border: 20px solid red;
    .box2 {
      height: 50vh;
      overflow-y: scroll;
      position: relative;
      border: 30px solid lightyellow;
      padding: 10px;
      margin: 5px;
      box-sizing: border-box;
      .box3 {
        box-sizing: boder-box;
        border: 5px solid blue;
        background-color: lightblue;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
