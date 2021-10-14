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

interface CreateConnectionConfig {
  autoAcceptConnection?: boolean
  alias?: string
  mediatorId?: string
  multiUseInvitation?: boolean
}

export {
  ConnectionInvitationMessage,
  ConnectionRecord,
  ReceiveInvitationConfig,
  CreateConnectionConfig
}