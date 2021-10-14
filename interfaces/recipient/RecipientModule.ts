import { ConnectionRecord } from '../connections/interfaces'
import { MediationRecord, Subscription } from './interfaces'

interface RecipientModule {
  initialize(): Promise<void>

  initiateMessagePickup(mediator: MediationRecord): Promise<Subscription | undefined>

  discoverMediation(): Promise<MediationRecord | undefined>

  pickupMessages(mediatorConnection: ConnectionRecord): Promise<void>

  setDefaultMediator(mediatorRecord: MediationRecord): Promise<void>

  requestMediation(connection: ConnectionRecord): Promise<MediationRecord>

  notifyKeylistUpdate(connection: ConnectionRecord, verkey: string): Promise<void>

  findByConnectionId(connectionId: string): Promise<MediationRecord | undefined>

  getMediators(): Promise<MediationRecord[]>

  findDefaultMediator(): Promise<MediationRecord | null>

  findDefaultMediatorConnection(): Promise<ConnectionRecord | null>

  requestAndAwaitGrant(connection: ConnectionRecord, timeoutMs: number): Promise<MediationRecord>

  provision(mediatorConnInvite: string): Promise<MediationRecord | null>
}

export { RecipientModule }
