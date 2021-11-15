interface ConnectionInvitationMessage {
  // to be defined
}

interface ConnectionRecord {
  // to be defined
}

interface ReceiveInvitationConfig {
  autoAcceptConnection?: boolean
  alias?: string
  mediatorId?: string
}

enum HandshakeProtocol {
  ConnectionProtocol,
  DidExchange,
}

// this isn't correct and needs some revision
interface CreateConnectionConfig {
  protocol: HandshakeProtocol
  autoAcceptConnection?: boolean
  alias?: string
  mediatorId?: string
  multiUseInvitation?: boolean
  goal?: string
  // needs to have a format based on https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0519-goal-codes/README.md
  goalCode?: string
}

export { ConnectionInvitationMessage, ConnectionRecord, ReceiveInvitationConfig, CreateConnectionConfig, HandshakeProtocol }
