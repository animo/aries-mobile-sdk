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

export { RequestAttachment, OutOfBandMessageConfig }
