import { ConnectionInvitationMessage, ConnectionRecord, CreateConnectionConfig, ReceiveInvitationConfig } from './interfaces';

interface ConnectionsModule {
  createConnection(config?: CreateConnectionConfig): Promise<{invitation: ConnectionInvitationMessage, connectionRecord: ConnectionRecord}>

  receiveInvitation(invitation: ConnectionInvitationMessage, config?: ReceiveInvitationConfig): Promise<ConnectionRecord>

  receiveInvitationFromUrl(invitationUrl: string, config?: ReceiveInvitationConfig): Promise<ConnectionRecord>

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

export { ConnectionsModule }