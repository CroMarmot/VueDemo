<template>
  <div>
    <h1>Secret page</h1>
    <span>{{ params }}</span>
  </div>
</template>

<script>
import axios from 'axiosUI'

export default {
  middleware: 'authenticated',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async asyncData({ params, error }, callback) {
    return {
      params: await axios.get(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,BCH&tsyms=USD&api_key=qwer`
      ),
    }
  },
  data() {
    return {}
  },
}
</script>
