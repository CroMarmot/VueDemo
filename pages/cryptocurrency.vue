<template>
  <div>
    <h1>Secret page</h1>
    <span>{{ params }}</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  middleware: 'authenticated',
  data() {
    return {
    }
  },
  async asyncData({ params, error }, callback) {
    return {
      params: await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH&tsyms=USD&api_key=qwer`)
    }
  }
}
</script>
