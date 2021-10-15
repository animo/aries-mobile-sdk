# Interface specification of Aries Mobile SDK component

The Aries Mobile SDK is created by creating an instance of the `Agent` class.

```typescript
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/react-native'

const agent = new Agent(
  {
    // Agent config to be defined
  },
  agentDependencies
)
```

After creating an agent it exposes a set of modules that together compose the public API of the mobile sdk, and allow you to easily perform actions on the agent. The base set of modules, with defined interfaces are as follows:

- [ConnectionsModule](./interfaces/connections/ConnectionsModule.ts) - For creating connections
- [CredentialsModule](./interfaces/credentials/CredentialsModule.ts) - For issuing and receiving credentials
- [ProofsModule](./interfaces/proofs/ProofsModule.ts) - For exchanging proofs
- [DidModule](./interfaces/dids/DidModule.ts) - For creating and resolving DIDs
- [BasicMessages](./interfaces/basic-messages/BasicMessagesModule.ts) - For exchanging basic messages with other agents
- [IndyModule](./interfaces/indy/IndyModule.ts) - For managing schemas and credential definitions
- [MediationRecipientModule](./mediation/MediationRecipientModule.ts) - For managing mediation with a mediator
- [DiscoverFeaturesModule](./discover-features/DiscoverFeaturesModule.ts) - For discovery of supported features of other agents.
