import { SendBasicMessageOptions, BasicMessageTags, BasicMessageRecord } from './interfaces'

interface BasicMessagesModule {
  sendMessage(options: SendBasicMessageOptions): Promise<BasicMessageRecord>
  findByQuery(query: Partial<BasicMessageTags>): Promise<BasicMessageRecord[]>
}
