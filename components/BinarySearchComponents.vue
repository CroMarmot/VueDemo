<template>
  <BinarySearchComponents
    v-if="(l !== lptr || r !== rptr) && d < 500"
    :l="lptr"
    :r="rptr"
    :gtfn="gtfn"
    :d="d + 1"
  />
  <div v-else>[{{ l }},{{ r }}]</div>
</template>

<script>
export default {
  name: 'BinarySearchComponents',
  props: {
    l: {
      type: Number,
      required: true,
    },
    r: {
      type: Number,
      required: true,
    },
    d: {
      type: Number,
      default: 0,
    },
    gtfn: {
      type: Function,
      required: true,
    },
  },
  computed: {
    m() {
      // console.log([this.l,this.r, this.d]);
      return (this.l + this.r) / 2
    },
    lptr() {
      return this.gtfn(this.m) ? this.l : this.m
    },
    rptr() {
      return this.gtfn(this.m) ? this.m : this.r
    },
  },
  mounted() {},
}
</script>
