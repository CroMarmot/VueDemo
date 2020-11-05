<!---
1. Set Tabwidth in data
2. Tabs are swipeable
3. Scrollable tabs
4. No external libraries used expcept vuejs
5. Using vuejs transition for animation
Demo : https://dagalti.github.io/vue-tabs.html
Codepen : https://codepen.io/dagalti/pen/pYKXQW
-->
<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,500"
      rel="stylesheet"
    />
    <div ref="tabbar" class="tabs">
      <div
        v-for="(tab, index) in items"
        :key="index"
        ref="tab"
        class="tabitem"
        :class="index === activetab ? 'active' : ''"
        @click="switchtab(index)"
      >
        {{ tab }}
      </div>
      <div
        class="slider"
        :style="'transform:translateX(' + activetab * tabwidth + 'px)'"
      ></div>
    </div>

    <div
      ref="tcon"
      class="tabcontainer"
      v-on="
        pointer
          ? {
              pointerdown: ($event) => start($event),
              pointermove: ($event) => move($event),
              pointerup: ($event) => end($event),
            }
          : {
              touchstart: ($event) => start($event),
              touchmove: ($event) => move($event),
              touchend: ($event) => end($event),
            }
      "
    >
      <transition v-for="(tab, index) in items" :key="index" :name="transition">
        <div v-if="index === activetab" class="tabpane">
          {{ tab }} : Tab Content
        </div>
      </transition>
    </div>
    <h2>Source Code :</h2>
    <a
      href="https://gist.github.com/dagalti/eea7f49378d9fa21de5e359dde0f859a"
      target="blank"
      >Vue Simple Swipable Material Tabs</a
    >
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      transition: 'slide-next',
      activetab: 0,
      tabwidth: 135,
      items: [
        'Google',
        'Apple',
        'Microsoft',
        'Samsung',
        'Nokia',
        'Sony',
        'Vivo',
        'Oneplus',
        'Oppo',
        'LG',
        'Blackberry',
      ],
      touch: { sx: null, sy: null, st: null, ex: null, ey: null, et: null },
    }
  },
  computed: {
    pointer() {
      if (window.PointerEvent) return true
      else return false
    },
  },
  mounted() {
    this.$refs.tabbar.style.setProperty('--tabwidth', this.tabwidth + 'px')
  },
  methods: {
    switchtab(n) {
      let scroll
      let scond = false
      if (this.activetab > n) {
        this.transition = 'slide-prev'
        scroll = n - 1
        if (scond) this.$refs.tab[scroll].scrollIntoView({ behavior: 'smooth' })
      } else if (this.activetab < n) {
        this.transition = 'slide-next'
        scroll = n + 1
      }
      scond = scroll >= 0 && scroll < this.items.length
      if (scond) this.$refs.tab[scroll].scrollIntoView({ behavior: 'smooth' })

      Vue.nextTick((_) => {
        this.activetab = n
      })
    },
    start(e) {
      this.settouchpos(e, 'start')
    },
    move(e) {
      this.settouchpos(e, 'move')
    },
    end(e) {
      this.settouchpos(e, 'end')
      const dx = this.touch.sx - this.touch.ex
      const dy = this.touch.sy - this.touch.ey
      const dt = this.touch.et - this.touch.st
      const dir = Math.sign(dx)
      let ntab = this.activetab + dir
      const vmove = Math.abs(dx) / Math.abs(dy) < Math.sqrt(4)
      ntab = ntab >= 0 && ntab < this.items.length ? ntab : null
      if (Math.abs(dx) > 10 && ntab !== null && !vmove && dt < 300)
        this.switchtab(ntab)
    },
    settouchpos(e, event) {
      const ev = e.changedTouches ? e.changedTouches[0] : e
      if (event === 'start') {
        this.touch.sx = ev.clientX
        this.touch.sy = ev.clientY
        this.touch.st = Date.now()
      } else {
        this.touch.ex = ev.clientX
        this.touch.ey = ev.clientY
        this.touch.et = Date.now()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-next-leave-active,
.slide-next-enter-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: 0.5s;
}
.slide-next-enter,
.slide-next-leave,
.slide-prev-leave-to {
  transform: translate(100%, 0);
}

.slide-next-leave-to,
.slide-prev-enter,
.slide-prev-leave {
  transform: translate(-100%, 0);
}

.tabs {
  display: flex;
  position: relative;
  background: #1565c0;
  color: #f1f1f1;
  height: 48px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 7px 0 rgba(0, 0, 0, 0.12);
  overflow-x: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.tabs::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}
.tabitem {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--tabwidth);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
}
.tabitem.active {
  font-weight: 500;
  color: white;
}
.slider {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: var(--tabwidth);
  background: white;
  transition: 0.5s ease;
}

.tabcontainer {
  height: 500px;
  position: relative;
  min-height: 100%;
  width: 100%;
  touch-action: pan-y;
}

.tabpane {
  position: absolute;
  width: 100%;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.app {
  margin: 0 auto;
  text-align: center;
}

body {
  font-family: 'Roboto', Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin: 0;
}
</style>
