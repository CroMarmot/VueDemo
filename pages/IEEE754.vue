<template>
  <div>
    <h3>未处理非规约数 和 0</h3>
    <decimal :weishusz="23" :jiemasz="8"></decimal>
    <decimal :weishusz="52" :jiemasz="11"></decimal>
  </div>
</template>

<script>
import Decimal from '~/components/Decimal'

export default {
  components: { Decimal },
  data() {
    return {}
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
</style>
