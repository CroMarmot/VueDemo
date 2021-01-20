<template>
  <div>
    <canvas ref="canvas" />
    <div ref="container"></div>
    <button @click="onClick">create</button>
  </div>
</template>

<script>
function canvasToJpeg(canvas, parentEl) {
  const img = document.createElement('img')
  const url = canvas.toDataURL('image/jpeg', 0.1)
  img.setAttribute('src', url)
  parentEl.appendChild(img)
}

export default {
  data() {
    return {}
  },
  mounted() {
    const canvas = this.$refs.canvas
    canvas.setAttribute('width', 300)
    canvas.setAttribute('height', 300)

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 300, 300)
  },
  methods: {
    onClick() {
      canvasToJpeg(this.$refs.canvas, this.$refs.container)
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
  overflow: auto;
}
</style>
