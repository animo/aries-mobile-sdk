interface BasicMessagesModule {
  sendMessage(connection: ConnectionRecord, message: string): Promise<void>;
  
  findAllByQuery(
    query: Partial<BasicMessageTags>
  ): Promise<BasicMessageRecord[]>;
}
