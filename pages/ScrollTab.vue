<template>
  <div class="box">
    <div ref="tab" class="tab">
      <div
        v-for="(item, index) in ['tab1', 'tab2', 'tab3']"
        :key="index"
        class="tab-each"
        :class="{ active: active === index }"
        @click="switchTab(index)"
      >
        <span> {{ item }} </span>
      </div>
    </div>
    <div ref="cont" class="cont">
      <div ref="cont_1"><div class="cont_1">内容一</div></div>
      <div ref="cont_2"><div class="cont_2">内容二</div></div>
      <div ref="cont_3"><div class="cont_3">内容三</div></div>
    </div>
    <div class="back-top" @click="backTop"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      contents: [],
    }
  },
  mounted() {
    this.contents.push(this.$refs.cont_1, this.$refs.cont_2, this.$refs.cont_3)
    const tabH = this.$refs.tab.offsetHeight
    this.$refs.cont.addEventListener('scroll', () => {
      for (let i = 0; i < this.contents.length; i++) {
        if (this.contents[i].getBoundingClientRect().top >= tabH) {
          this.active = i
          return
        }
      }
    })
  },
  methods: {
    backTop() {
      this.switchTab(0)
    },
    switchTab(index) {
      this.contents[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.box {
  font-size: 5vh;
  overflow-x: auto;
  height: 100vh;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .tab {
    height: 12vh;
    background: #fff;
    line-height: 12vh;
    color: #666;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    &-each {
      flex: 1;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      font-size: 6vh;
      color: #333;
      background-color: lightcoral;
    }
  }
  .cont {
    flex-grow: 1;
    overflow: auto;
    .cont_1 {
      height: 400px;
      background: pink;
    }
    .cont_2 {
      height: 800px;
      background: yellow;
    }
    .cont_3 {
      height: 200vh;
      background: lightgreen;
    }
  }
  .back-top {
    width: 10vw;
    height: 10vw;
    background: url('~assets/back-top.png') center / 100% 100% no-repeat;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: fixed;
    bottom: 5vh;
    right: 10vw;
  }
}
</style>
