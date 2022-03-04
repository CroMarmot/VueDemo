<template>
  <div class="container">
    <div class="links">
      <NuxtLink
        v-for="(item, index) in list"
        :key="index"
        :to="`/${item.name}`"
      >
        <a rel="noopener noreferrer" class="button--green">
          {{ item.name }}
        </a>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      list: [
        { name: 'BinarySearchDemo' },
        { name: 'Echarts4Import' },
        { name: 'IEEE754' },
        { name: 'MaterialSwipeTabs' },
        { name: 'Position' },
        { name: 'Ripple' },
        { name: 'ScrollTab' },
        { name: 'SwiperDemo' },
        { name: 'ToDataUrl' },
        { name: 'VerticalPage' },
        { name: 'VueForDemo' },
        { name: 'cryptocurrency' },
        { name: 'ios13.5.1bug' },
        { name: 'protobuf' },
        { name: 'swiperTest ' },
        { name: 'DeepClone' },
      ],
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
