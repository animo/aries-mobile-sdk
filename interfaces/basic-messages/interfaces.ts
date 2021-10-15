interface SendBasicMessageOptions {
  message: string
}

enum BasicMessageRole {
  Sender = 'sender',
  Receiver = 'receiver',
}

interface BasicMessageTags {
  connectionId: string
  role: BasicMessageRole
}

interface BasicMessageRecord {
  connectionId: string
  role: BasicMessageRole

  // rest to be defined
}

export { SendBasicMessageOptions, BasicMessageRole, BasicMessageTags, BasicMessageRecord }
