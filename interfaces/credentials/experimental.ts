interface MessageRecord {
  message: AnyJson
  createdAt: Date
  threadId: string
  connectionId?: string
  role: MessageRole // 'sender' or 'receiver'

  // Can be computed
  protocolName: string
  versionMajor: string
  versionMinor: string
  messageType: string
}

const messages = messageRepository.findMessagesByQuery({
  threadId: 'f5dedc93-6552-4757-85e2-e452da9656cd',
  protocolName: 'issue-credential',
  versionMajor: 2,
  messageType: 'propose-credential',
})
