<template>
  <div>
    <input v-model="value" />
    <div class="bit-group">
      <div
        v-for="(item, index) in bitGroup"
        class="bit"
        :class="{
          jiema: index > 0 && index <= jiemasz,
          weishu: index > jiemasz,
        }"
      >
        {{ item }}
      </div>
    </div>
    <h1>expression</h1>
    <div class="exp">
      <div class="neg1">
        (-1)
        <div class="pow-neg">{{ bitGroup[0] }}</div>
      </div>
      <div class="two">
        x2
        <div class="pow2">{{ mi }}</div>
      </div>
      <div class="weishu">
        x1.{{ wsString }}
        <span class="tag">binary</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weishusz: Number,
    jiemasz: Number,
  },
  data() {
    return {
      value: '',
      bitGroup: [],
      mi: 0,
      ws: 0,
      wsString: '',
    }
  },
  computed: {
    bitsz() {
      return 1 + this.jiemasz + this.weishusz
    },
  },
  watch: {
    value(v) {
      let n = Number(v)
      this.bitGroup[0] = Number(n < 0)
      if (n === 0) {
        console.log(0)
        return
      }
      if (n < 0) {
        n = -n
      }
      // mi ci
      let mi = 0
      // make in [1,2)
      while (n >= 2) {
        mi++
        n /= 2
      }
      while (n < 1) {
        mi--
        n *= 2
      }
      this.mi = mi
      // wei shu
      n -= 1
      // int
      let ws = 0
      for (let i = 0; i < this.weishusz; i++) {
        n *= 2
        ws *= 2
        if (n >= 1) {
          ws += 1
          n -= 1
        }
      }
      this.ws = ws
      // set in bit group
      let half = 1
      for (let i = 1; i < this.jiemasz; i++) {
        half *= 2
      }
      half -= 1
      let jiema = mi + half
      for (let i = 0; i < this.jiemasz; i++) {
        this.bitGroup[this.jiemasz - i] = jiema % 2
        jiema -= jiema % 2
        jiema /= 2
      }
      // set in bit group
      let s = ''
      for (let i = 0; i < this.weishusz; i++) {
        this.bitGroup[this.bitGroup.length - 1 - i] = ws % 2
        s = `${this.bitGroup[this.bitGroup.length - 1 - i]}` + s
        ws -= ws % 2
        ws /= 2
      }
      this.wsString = s
    },
  },
  mounted() {
    const arr = []
    for (let i = 0; i < this.bitsz; i++) {
      arr.push(0)
    }
    this.bitGroup = arr
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

.bit-group {
  display: block;
  .bit {
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 1.5em;
    width: 1.5em;
    box-sizing: border-box;
    border: 1px solid black;

    &.jiema {
      background-color: lightgreen;
    }

    &.weishu {
      background-color: lightcoral;
    }
  }
}

.exp {
  font-size: 3em;
  display: inline-flex;

  .neg1 {
    display: inline-flex;

    .pow-neg {
      font-size: 0.5em;
    }
  }

  .two {
    background-color: lightgreen;
    display: inline-flex;

    .pow2 {
      font-size: 0.5em;
    }
  }

  .weishu {
    background-color: lightcoral;
    display: inline-flex;

    .tag {
      font-size: 0.5rem;
    }
  }
}
</style>
