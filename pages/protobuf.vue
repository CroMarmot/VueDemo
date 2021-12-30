<template>
  <div class="container">
    {{ msg }}
    <button @click="postProtobuf()">post</button>
    <button @click="getProtobuf()">get</button>
    <h2>client</h2>
    <code>
      proto生成js "proto2js": "pbjs -t static-module -w es6 -o
      ./proto/msgProto.js ./proto/message.proto",
    </code>
    <code>
      proto生成ts "js2ts": "pbts -o ./proto/msgProto.d.ts ./proto/msgProto.js",
    </code>
    <h2>server</h2>
    <pre>
      cd proto/simpleprotoserver
      yarn && yarn start
    </pre>
  </div>
</template>

<script>
/* eslint-disable new-cap */
import * as msgProto from '~/proto/msgProto.js'

export default {
  data() {
    return {
      val: process.env.baseUrl,
      msg: {},
    }
  },
  methods: {
    getProtobuf() {
      this.$axios
        .get('http://127.0.0.1:3001/api/messages', {
          responseType: 'arraybuffer',
        })
        .then((response) => {
          console.log('Response from the server: ', response)
          const data = new Uint8Array(response.data) // important !
          const ret = msgProto.Message.decode(data)
          console.log('Decoded message', ret)
          this.msg = ret.toJSON()
        })
    },
    postProtobuf() {
      const msg = new msgProto.Message({ text: 'yx xr', lang: 'slang' })
      const buffer = msgProto.Message.encode(msg).finish()
      console.log('de(en(msg))', msgProto.Message.decode(buffer))
      console.log('send:', msg)
      console.log('send buffer:', buffer)
      this.$axios
        .$post('http://127.0.0.1:3001/api/messages', buffer, {
          headers: { 'Content-Type': 'application/octet-stream' },
          responseType: 'arraybuffer',
        })
        .then((response) => {
          console.log('Response from the server: ', response)
          const data = new Uint8Array(response) // important !
          const ret = msgProto.Message.decode(data)
          console.log('Decoded message', ret)
          this.msg = ret.toJSON()
        })
        .catch(function (response) {
          console.log(response)
        })
    },
  },
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
