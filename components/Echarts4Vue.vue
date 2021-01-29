<template>
  <div class="auto-fit-div"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      instance: null,
    }
  },
  watch: {
    option: {
      deep: true,
      handler() {
        this.updateEcharts()
      },
    },
  },
  mounted() {
    this.instance = echarts.init(this.$el)
    this.updateEcharts()
    this.$emit('onInit', { instance: this.instance })
  },
  updated() {
    this.updateEcharts()
  },
  methods: {
    go() {
      window.instance = this.instance
    },
    updateEcharts() {
      this.instance && this.instance.setOption(this.option)
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
.auto-fit-div {
  width: 100%;
  height: 100%;
  background-color: lightgreen;
}
</style>
