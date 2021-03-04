<template>
  <div class="container">
    <div>
      <h1 class="title">VueDemo</h1>
      <div class="links">
        <NuxtLink to="/ScrollTab">
          <a rel="noopener noreferrer" class="button--green"> ScrollTab </a>
        </NuxtLink>
        <NuxtLink to="/SwiperDemo">
          <a rel="noopener noreferrer" class="button--green"> Swiper </a>
        </NuxtLink>
        <NuxtLink to="/MaterialSwipeTabs">
          <a rel="noopener noreferrer" class="button--green">
            MaterialSwipeTabs
          </a>
        </NuxtLink>
        <NuxtLink to="/VerticalPage">
          <a rel="noopener noreferrer" class="button--green"> VerticalPage </a>
        </NuxtLink>
        <NuxtLink to="/Ripple">
          <a rel="noopener noreferrer" class="button--green"> Ripple </a>
        </NuxtLink>
        <NuxtLink to="/ToDataUrl">
          <a rel="noopener noreferrer" class="button--green"> ToDataUrl </a>
        </NuxtLink>
        <NuxtLink to="/Echarts4Import">
          <a rel="noopener noreferrer" class="button--green">
            Echarts4Import
          </a>
        </NuxtLink>
        <NuxtLink to="/BinarySearchDemo">
          <a rel="noopener noreferrer" class="button--green">
            BinarySearchDemo
          </a>
        </NuxtLink>
        <NuxtLink to="/VueForDemo">
          <a rel="noopener noreferrer" class="button--green"> VueForDemo </a>
        </NuxtLink>
        <NuxtLink to="/IEEE754">
          <a rel="noopener noreferrer" class="button--green"> IEEE754 </a>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
</style>
