<template>
  <div>
    小心 vue 的复用元素的问题
    <button @click="vis = !vis">switch</button>
    <button @click="updateData">update</button>
    0
    <div v-if="vis" :key="1" class="any-wrap-div">
      <echarts4-vue :option="echartsOption"></echarts4-vue>
    </div>
    0 1
    <div v-if="!vis" :key="2" class="any-wrap-div h400">
      <echarts4-vue :option="echartsOption"></echarts4-vue>
    </div>
    1 2
    <div v-show="vis" :key="3" class="any-wrap-div">
      <echarts4-vue
        :option="echartsOption"
        @onInit="onEchartsInit"
      ></echarts4-vue>
    </div>
    2 3
    <div v-show="!vis" :key="4" class="any-wrap-div h400">
      <echarts4-vue
        :option="echartsOption"
        @onInit="onEchartsInit"
      ></echarts4-vue>
    </div>
    3
  </div>
</template>

<script>
import Echarts4Vue from '~/components/Echarts4Vue'

export default {
  components: { Echarts4Vue },
  data() {
    return {
      vis: false,
      instance: null,
      instanceGroup: [],
      echartsOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            padding: 4,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 100, name: '直接访问' }],
            itemStyle: {
              // this configuration
              normal: {
                borderWidth: 10,
                borderColor: '#00ff00',
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 0, 0, 1)',
              },
            },
          },
        ],
      },
    }
  },
  watch: {
    vis() {
      this.$nextTick(() => {
        for (const idx in this.instanceGroup) {
          this.instanceGroup[idx].resize()
        }
      })
    },
  },
  mounted() {},
  methods: {
    onEchartsInit({ instance }) {
      this.instanceGroup.push(instance)
    },
    updateData() {
      this.echartsOption.series[0].data.push({
        value: 100 * Math.random(),
        name: '邮件营销',
      })
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
