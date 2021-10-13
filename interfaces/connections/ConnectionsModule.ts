interface ConnectionsModule {
  createConnection(config?: {
    autoAcceptConnection?: boolean
    alias?: string
    mediatorId?: string
    multiUseInvitation?: boolean
  }): Promise<{
    invitation: ConnectionInvitationMessage
    connectionRecord: ConnectionRecord
  }>

  receiveInvitation(
    invitation: ConnectionInvitationMessage,
    config?: {
      autoAcceptConnection?: boolean
      alias?: string
      mediatorId?: string
    }
  ): Promise<ConnectionRecord>

  receiveInvitationFromUrl(
    invitationUrl: string,
    config?: {
      autoAcceptConnection?: boolean
      alias?: string
      mediatorId?: string
    }
  ): Promise<ConnectionRecord>

  acceptInvitation(connectionId: string): Promise<ConnectionRecord>

  acceptRequest(connectionId: string): Promise<ConnectionRecord>

  acceptResponse(connectionId: string): Promise<ConnectionRecord>

  returnWhenIsConnected(connectionId: string): Promise<ConnectionRecord>

  getAll()

  getById(connectionId: string): Promise<ConnectionRecord>

  findById(connectionId: string): Promise<ConnectionRecord | null>

  deleteById(connectionId: string)

  findByVerkey(verkey: string): Promise<ConnectionRecord | null>

  findByTheirKey(verkey: string): Promise<ConnectionRecord | null>

  findByInvitationKey(key: string): Promise<ConnectionRecord | null>

  getByThreadId(threadId: string): Promise<ConnectionRecord>
}
