# BasicMessagesModule Examples

### Send message

```typescript
const basicMessage = await agent.basicMessages.sendMessage({
  connectionId: '2589e15b-bcb2-42fc-b238-5c9bcbf51d54',
  message: 'Hey there!',
})
```

### Find messages by query

```typescript
const basicMessages = await agent.basicMessages.findByQuery({
  connectionId: '589e15b-bcb2-42fc-b238-5c9bcbf51d54',
  role: BasicMessageRole.Receiver,
})
```
