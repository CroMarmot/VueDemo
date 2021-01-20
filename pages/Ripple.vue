<template>
  <div>
    <button v-mat-ripple>ripple button</button>
    <h1 v-mat-ripple>h1</h1>
    <div v-mat-ripple class="any-div">any div</div>
    <div class="parent-div">
      <div v-mat-ripple class="child-div">nested div</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

function createRipple(event, { timeOut = 600 } = {}) {
  const button = event.currentTarget
  const span = document.createElement('div')
  span.style.top = '0'
  span.style.left = '0'
  span.style.position = 'absolute'
  span.style.width = `${button.clientWidth}px`
  span.style.height = `${button.clientHeight}px`
  span.style.overflowX = 'hidden'
  span.style.overflowY = 'hidden'
  span.style.userSelect = 'none'
  button.appendChild(span)

  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.pageX - button.offsetLeft - radius}px`
  circle.style.top = `${event.pageY - button.offsetTop - radius}px`
  circle.classList.add('ripple')
  span.append(circle)

  setTimeout(() => {
    span.remove()
  }, timeOut)
}

/* el style position must be relative */
function bindElRipple(el) {
  el.addEventListener('click', createRipple)
}

Vue.directive('mat-ripple', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el) {
    el.focus()
    bindElRipple(el)
  },
})

// Import Swiper styles
export default {
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
button {
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  background-color: #6200ee;
  padding: 1rem 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
h1 {
  background-color: lightblue;
  position: relative;
}
.any-div {
  position: relative;
  background-color: lightgreen;
}
.parent-div {
  display: inline-block;
  padding: 3em;
  background-color: lightblue;
  .child-div {
    position: relative;
    padding: 2em;
    background-color: lightcoral;
  }
}
</style>

<style lang="scss">
body {
  padding: 3em;
  box-sizing: border-box;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.3);
  user-select: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
