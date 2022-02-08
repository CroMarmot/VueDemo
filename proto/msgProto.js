/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
import * as $protobuf from 'protobufjs/minimal'

// Common aliases
const $Reader = $protobuf.Reader
const $Writer = $protobuf.Writer
const $util = $protobuf.util

// Exported root namespace
const $root = $protobuf.roots.default || ($protobuf.roots.default = {})

export const Message = ($root.Message = (() => {
  /**
   * Properties of a Message.
   * @exports IMessage
   * @interface IMessage
   * @property {string} text Message text
   * @property {string} lang Message lang
   */

  /**
   * Constructs a new Message.
   * @exports Message
   * @classdesc Represents a Message.
   * @implements IMessage
   * @constructor
   * @param {IMessage=} [properties] Properties to set
   */
  function Message(properties) {
    if (properties)
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]]
  }

  /**
   * Message text.
   * @member {string} text
   * @memberof Message
   * @instance
   */
  Message.prototype.text = ''

  /**
   * Message lang.
   * @member {string} lang
   * @memberof Message
   * @instance
   */
  Message.prototype.lang = ''

  /**
   * Creates a new Message instance using the specified properties.
   * @function create
   * @memberof Message
   * @static
   * @param {IMessage=} [properties] Properties to set
   * @returns {Message} Message instance
   */
  Message.create = function create(properties) {
    return new Message(properties)
  }

  /**
   * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
   * @function encode
   * @memberof Message
   * @static
   * @param {IMessage} message Message message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Message.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create()
    writer.uint32(/* id 1, wireType 2 = */ 10).string(message.text)
    writer.uint32(/* id 2, wireType 2 = */ 18).string(message.lang)
    return writer
  }

  /**
   * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
   * @function encodeDelimited
   * @memberof Message
   * @static
   * @param {IMessage} message Message message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim()
  }

  /**
   * Decodes a Message message from the specified reader or buffer.
   * @function decode
   * @memberof Message
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {Message} Message
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Message.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
    const end = length === undefined ? reader.len : reader.pos + length
    const message = new $root.Message()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string()
          break
        case 2:
          message.lang = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    if (!message.hasOwnProperty('text'))
      throw new $util.ProtocolError("missing required 'text'", {
        instance: message,
      })
    if (!message.hasOwnProperty('lang'))
      throw new $util.ProtocolError("missing required 'lang'", {
        instance: message,
      })
    return message
  }

  /**
   * Decodes a Message message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof Message
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {Message} Message
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  Message.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader)
    return this.decode(reader, reader.uint32())
  }

  /**
   * Verifies a Message message.
   * @function verify
   * @memberof Message
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  Message.verify = function verify(message) {
    if (typeof message !== 'object' || message === null)
      return 'object expected'
    if (!$util.isString(message.text)) return 'text: string expected'
    if (!$util.isString(message.lang)) return 'lang: string expected'
    return null
  }

  /**
   * Creates a Message message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof Message
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {Message} Message
   */
  Message.fromObject = function fromObject(object) {
    if (object instanceof $root.Message) return object
    const message = new $root.Message()
    if (object.text != null) message.text = String(object.text)
    if (object.lang != null) message.lang = String(object.lang)
    return message
  }

  /**
   * Creates a plain object from a Message message. Also converts values to other types if specified.
   * @function toObject
   * @memberof Message
   * @static
   * @param {Message} message Message
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  Message.toObject = function toObject(message, options) {
    if (!options) options = {}
    const object = {}
    if (options.defaults) {
      object.text = ''
      object.lang = ''
    }
    if (message.text != null && message.hasOwnProperty('text'))
      object.text = message.text
    if (message.lang != null && message.hasOwnProperty('lang'))
      object.lang = message.lang
    return object
  }

  /**
   * Converts this Message to JSON.
   * @function toJSON
   * @memberof Message
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  Message.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
  }

  return Message
})())

export { $root as default }
