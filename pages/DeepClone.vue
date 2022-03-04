<template>
  <div>
    in parent :
    <pre>{{ v }}</pre>
    <throw-value-el :value="v" @throwValue="fn" />
    <div>Equal: {{ v == getV }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ThrowValueEl from '@/components/ThrowValueEl.vue'

export default Vue.extend({
  components: { ThrowValueEl },
  data() {
    return {
      v: {
        x: 123,
      },
      getV: {
        x: 123,
      },
    }
  },
  methods: {
    fn(v: any) {
      this.getV = v
    },
  },
})
</script>
