<template>
  <div><button @click="c">Op</button></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    c() {
      this.$emit('throwValue', this.value)
    },
  },
})
</script>
