import { HandshakeProtocol } from '../connections/interfaces'

interface RequestAttachment {
  // to be defined
}

interface OutOfBandMessageConfig {
  // TODO: fix this

  goal?: string
  // needs to have a format based on https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0519-goal-codes/README.md
  goalCode?: string
  protocols: HandshakeProtocol[]
  attachment: RequestAttachment[]
}

type UrlMessage = string

// ---------- oob module ----------
class OutOfBandModule {
  public createInvitation() {
    // if handshake createConnection
  }
  public receiveInvitationFromUrl(message: UrlMessage) {
    // convert to OutOfBandMessage
    // 1 handshake
    // find existing or create new connection -> connectionsModule.findOrCreateConnection()
    // if messages -> process messages with services from connection
    // validate supported protocols
    // take first message that is supported by agent
    // 2 no handshake
    // if messages -> process messages with services from service attribute
    // validate supported protocols
    // take first message that is supported by agent
    // receivePlaintextMessage ???
  }
  private sendProblemReport() {}
}
// ---------- message receiver ----------

// ---------- connections module ----------
class ConnectionModule {
  public async findOrCreateConnection(handshakeProtocols, services): Promise<ConnectionRecord> {
    return
  }
}

class HandshakeReuseMessage {}
class HandshakeReuseAcceptedMessage {}

class HandshakeReuseMessageHandler {}
class HandshakeReuseAcceptedMessageHandler {}
// ---------- connections module ----------

// ---------- message receiver ----------
interface PlaintextMessage {
  '@type': string
  '@id': string
  [key: string]: unknown
}

interface EncryptedMessage {
  protected: 'base64url'
  iv: 'base64url'
  ciphertext: 'base64url'
  tag: 'base64url'
}

interface ConnectionRecord {}
interface DidCommService {}
interface AgentMessage{}

interface InboundMessageContext {
  encryptedMessage: EncryptedMessage,
  plaintextMessage: PlaintextMessage,
  recipientKey: string,
  senderKey: string,
  connection: ConnectionRecord,
  service: DidCommService,
  session: any
}

class MessageReceiver {
  private receivePlaintextMessage(message: PlaintextMessage, connection?: ConnectionRecord, service?: DidCommService) {
    // transform PlaintextMessage -> AgentMessage
    // create InboudMessageContext with connection or service
    // dispatch InboudMessageContext
  }

  public receiveEncryptedMessage() {
    // unpack EncryptedMessage -> PlaintextMessage + sender key, recipient key
    // what messages are valid with anoncrypt?
    // unknown recipient key: inconsistency error, the wallet contains key but agent does not have more information about it
    // known recipient key: out-of-band message or public DID
    // unknown sender key: connection request, connection-less message
    // known sender key: connection record
    // transform PlaintextMessage -> AgentMessage
    // create InboudMessageContext with connection or service and sender key, recipient key
    // dispatch InboudMessageContext
    // receivePlaintextMessage ???
  }
}
// ---------- message receiver ----------

class MessageTransformer {
  // Or transformAndValidateMessage because it should do both.
  // Its responsibility is to get plaintext message and return valid AgentMessage.
  // I think  we can say that validation is part of transformation, right?
  public async transformMessage(plaintextMessage: PlaintextMessage): Promise<AgentMessage> {
    return
  }
}

export { RequestAttachment, OutOfBandMessageConfig }
