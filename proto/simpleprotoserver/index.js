/* eslint-disable */
// https://protobufjs.github.io/protobuf.js/

const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const messages = [
  { text: 'hey', lang: 'english' },
  { text: 'isänme', lang: 'tatar' },
  { text: 'hej', lang: 'swedish' },
]
const protoFolderName = '../'
app.use(function (req, res, next) {
  if (!req.is('application/octet-stream')) {
    return next()
  }
  let data = [] // List of Buffer objects
  req.on('data', function (chunk) {
    data.push(chunk) // Append Buffer object
  })
  req.on('end', function () {
    if (data.length <= 0) return next()
    data = Buffer.concat(data) // Make one large Buffer of it
    console.log('Received buffer', data)
    req.raw = data
    next()
  })
})

const ProtoBuf = require('protobufjs')
const root = ProtoBuf.loadSync(
  path.join(__dirname, protoFolderName, 'message.proto')
)

const Message = root.lookupType('Message')

app.get('/api/messages', (req, res, next) => {
  console.warn('on get')
  const msg = Message.create(messages[Math.round(Math.random() * 2)])
  console.log(
    'Encode and decode: ',
    Message.decode(Message.encode(msg).finish())
  )
  console.log('Buffer we are sending: ', Message.encode(msg).finish())
  // res.send(msg.encode().toBuffer(), 'binary') // alternative
  res.send(Message.encode(msg).finish())
  // res.send(Buffer.from(msg.toArrayBuffer()), 'binary') // alternative
})

app.post('/api/messages', (req, res, next) => {
  if (req.raw) {
    try {
      // Decode the Message
      let msg = Message.decode(req.raw)
      console.log('Received "%s" in %s', msg.text, msg.lang)
      console.log('Received :', msg)

      msg = Message.create(messages[Math.round(Math.random() * 2)])
      console.log(
        'Encode and decode: ',
        Message.decode(Message.encode(msg).finish())
      )
      console.log('Buffer we are sending: ', Message.encode(msg).finish())
      // res.send(msg.encode().toBuffer(), 'binary') // alternative
      res.send(Message.encode(msg).finish())
    } catch (err) {
      console.log('Processing failed:', err)
      next(err)
    }
  } else {
    console.log('Not binary data')
  }
})

app.all('*', (req, res) => {
  res.status(400).send('Not supported')
})

const PORT = 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`app listening on port ${PORT}!`)
})
