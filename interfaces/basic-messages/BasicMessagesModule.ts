import { SendBasicMessageOptions, BasicMessageTags, BasicMessageRecord } from './interfaces'

interface BasicMessagesModule {
  sendMessage(connectionId: string, options: SendBasicMessageOptions): Promise<void>
  findByQuery(query: Partial<BasicMessageTags>): Promise<BasicMessageRecord[]>
}
