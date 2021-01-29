<template>
  <div>
    <h1>
      显然纯js能二分1直到自己相等(大约1000层)，裸的js函数递归超8000+层（我电脑上），然而vue
      在556层超过了最大call stack
    </h1>
    <BinarySearchComponents :l="0" :r="100" :gtfn="(v) => v * v - 1 > 0" />
    <BinarySearchComponents :l="0" :r="100" :gtfn="(v) => 3 * v * v - 1 > 0" />
    <input v-model="customL" placeholder="custom L" />
    <input v-model="customR" placeholder="custom R" />
    <input v-model="customFn" placeholder="custom function" />
    <BinarySearchComponents
      :l="Number(customL)"
      :r="Number(customR)"
      :gtfn="gtfn"
    />
  </div>
</template>

<script>
import BinarySearchComponents from '../components/BinarySearchComponents'
export default {
  components: { BinarySearchComponents },
  data() {
    return {
      customL: '',
      customR: '',
      customFn: '',
      gtfn: () => true,
    }
  },
  watch: {
    customFn() {
      try {
        // eslint-disable-next-line no-eval
        const fn = eval(this.customFn)
        if (typeof fn === 'function') {
          this.gtfn = fn
          return
        } else {
          console.warn('Not a function')
        }
      } catch (e) {
        console.warn(e)
      }
      this.gtfn = () => true
    },
  },
}
</script>

<style lang="scss" scoped>
html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
.any-wrap-div {
  width: 50vh;
  height: 80vh;
  position: relative;
  background-color: lightgreen;
  &.h400 {
    height: 160vh;
  }
}
</style>
