import * as $protobuf from "protobufjs";
/** Properties of a Message. */
export interface IMessage {

    /** Message text */
    text: string;

    /** Message lang */
    lang: string;
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message text. */
    public text: string;

    /** Message lang. */
    public lang: string;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a qwer. */
export interface Iqwer {

    /** qwer a */
    a: string;
}

/** Represents a qwer. */
export class qwer implements Iqwer {

    /**
     * Constructs a new qwer.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iqwer);

    /** qwer a. */
    public a: string;

    /**
     * Creates a new qwer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qwer instance
     */
    public static create(properties?: Iqwer): qwer;

    /**
     * Encodes the specified qwer message. Does not implicitly {@link qwer.verify|verify} messages.
     * @param message qwer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iqwer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qwer message, length delimited. Does not implicitly {@link qwer.verify|verify} messages.
     * @param message qwer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iqwer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qwer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qwer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qwer;

    /**
     * Decodes a qwer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qwer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qwer;

    /**
     * Verifies a qwer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qwer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qwer
     */
    public static fromObject(object: { [k: string]: any }): qwer;

    /**
     * Creates a plain object from a qwer message. Also converts values to other types if specified.
     * @param message qwer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qwer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qwer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
