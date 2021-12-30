<template>
  <div
    class="container"
  >
    <div
      v-show="display"
      :style="{ transform: angle }"
      class="demo-div"
    >
      Hey
    </div>

    <h1>expect: show div, rotate div. rotate angle({{ rotateA }}), hide div</h1>
    <div v-if="!unClickable">
      <h2 @click="onClick(0)">
        Same angle(bug)
      </h2>
      <h2 @click="onClick(60)">
        +60 angle
      </h2>
    </div>
  </div>
</template>

<script>
// rotate stuck on ios ( >=13.5.1 ) , works well on android and ios ( <= 12 )
export default {
  data() {
    return {
      unClickable: false,
      display: false,
      angle: 'rotate(0deg)',
      rotateA: 0
    }
  },
  methods: {
    onClick(deg) {
      if (this.unClickable) {
        return
      }
      this.unClickable = true
      this.display = true
      setTimeout(() => {
        // if rotate don't change the rotation will stucked
        this.rotateA = (this.rotateA + deg) % 360
        this.angle = `rotate(${(6 * 360 + this.rotateA)}deg)`
      }, 100)
      // change 100 to 1000 works well

      setTimeout(() => {
        this.display = false
        this.angle = 'rotate(0deg)'
        this.unClickable = false
      }, 5500)
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h2 {
  background-color: lightgrey;
  padding: 1em;
}

.demo-div {
  transition: transform ease-out 4.5s;
  width: 50vw;
  height: 50vh;
  background-color: lightblue;
}
</style>
