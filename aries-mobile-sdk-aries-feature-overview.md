# Aries Mobile SDK - Aries Feature Overview

## Platform Support

| Platform | Current | Notes                |
| -------- | ------- | -------------------- |
| iOS      | ✅      | Runs in React Native |
| Android  | ✅      | Runs in React Native |

## Agent Types

| Role     | Current | Notes                                                                        |
| -------- | ------- | ---------------------------------------------------------------------------- |
| Issuer   | ✅      | Holder and verifier wallets seem more valuable to use, so not our main focus |
| Holder   | ✅      |                                                                              |
| Verifier | ✅      |                                                                              |

## AIP Support

| AIP Version                                                                                                                         | Supported | Notes                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AIP 1.0](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-10) | ✅        |                                                                                                                                                                     |
| [AIP 2.0](https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0302-aries-interop-profile#aries-interop-profile-version-20) | ✅        | Als include support for subtargets 'Mediator Coordination, 'Indy Based Credentials', 'JSON-LD Based Credentials', 'BBS+ Based Credentials', 'Chat related features' |

## Miscellaneous

| Feature                                              | Supported | Note                                                                                                                      |
| ---------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| Multi indy ledger support (with automatic detection) | ✅        | Use multiple indy ledgers at the same time. This removes the need for the user selecting a ledger from the settings menu. |
| Wallet Import & Export                               | ✅        |                                                                                                                           |

## Supported RFCs (AIP 1.0 and 2.0)

| RFC                                                                                                                                                                     | Supported | Note                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------- |
| [0003-protocols](https://github.com/hyperledger/aries-rfcs/tree/9b7ab9814f2e7d1108f74aca6f3d2e5d62899473/concepts/0003-protocols)                                       | ✅        |                                                            |
| [0004-agents](https://github.com/hyperledger/aries-rfcs/tree/f1e420f76abd9ff4af5c15d375fa6cf8c2cacb33/concepts/0004-agents)                                             | ✅        |                                                            |
| [0005-didcomm](https://github.com/hyperledger/aries-rfcs/tree/f1e420f76abd9ff4af5c15d375fa6cf8c2cacb33/concepts/0005-didcomm)                                           | ✅        |                                                            |
| [0008-message-id-and-threading](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0008-message-id-and-threading)         | ✅        |                                                            |
| [0011-decorators](https://github.com/hyperledger/aries-rfcs/tree/965a975f953d72e370d2b6fb28eec538ec756c6d/concepts/0011-decorators)                                     | ✅        |                                                            |
| [0015-acks](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0015-acks)                                                 | ✅        |                                                            |
| [0017-attachments](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0017-attachments)                                   | ✅        |                                                            |
| [0019-encryption-envelope](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0019-encryption-envelope)                   | ✅        |                                                            |
| [0020-message-types](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0020-message-types)                               | ✅        |                                                            |
| [0023-did-exchange](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0023-did-exchange)                                 | ✅        |                                                            |
| [0025-didcomm-transports](https://github.com/hyperledger/aries-rfcs/tree/b490ebe492985e1be9804fc0763119238b2e51ab/features/0025-didcomm-transports)                     | ✅        | Support for HTTP and WebSockets                            |
| [0035-report-problem](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0035-report-problem)                             | ✅        |                                                            |
| [0036-issue-credential](https://github.com/hyperledger/aries-rfcs/tree/bb42a6c35e0d5543718fb36dd099551ab192f7b0/features/0036-issue-credential)                         | ✅        |                                                            |
| [0037-present-proof](https://github.com/hyperledger/aries-rfcs/tree/4fae574c03f9f1013db30bf2c0c676b1122f7149/features/0037-present-proof)                               | ✅        |                                                            |
| [0044-didcomm-file-and-mime-types](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0044-didcomm-file-and-mime-types)   | ✅        |                                                            |
| [0047-json-LD-compatibility](https://github.com/hyperledger/aries-rfcs/tree/53c2e7accc8394c9c7b09563c0eec3c564c133c6/concepts/0047-json-ld-compatibility)               | ✅        |                                                            |
| [0046-mediators-and-relays](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0046-mediators-and-relays)                 | ✅        |                                                            |
| [0048-trust-ping](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0048-trust-ping)                                     | ✅        |                                                            |
| [0050-wallets](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0050-wallets)                                           | ✅        |                                                            |
| [0056-service-decorator](https://github.com/hyperledger/aries-rfcs/tree/527849ec3aa2a8fd47a7bb6c57f918ff8bcb5e8c/features/0056-service-decorator)                       | ✅        |                                                            |
| [0092-transport-return-route](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0092-transport-return-route)             | ✅        |                                                            |
| [0094-cross-domain messaging](https://github.com/hyperledger/aries-rfcs/tree/64e5e55c123b2efaf38f4b0911a71a1c40a7f29d/concepts/0094-cross-domain-messaging)             | ✅        |                                                            |
| [0095-basic-message](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0095-basic-message)                               | ✅        |                                                            |
| [0160-connection-protocol](https://github.com/hyperledger/aries-rfcs/tree/9b0aaa39df7e8bd434126c4b33c097aae78d65bf/features/0160-connection-protocol)                   | ✅        |                                                            |
| [0211-route-coordination](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0211-route-coordination)                     | ✅        |                                                            |
| [0183-revocation-notification](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0183-revocation-notification)           | ✅        |                                                            |
| [0360-use-did-key](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0360-use-did-key)                                   | ✅        |                                                            |
| [0434-outofband](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0434-outofband)                                       | ✅        |                                                            |
| [0441-present-proof-best-practices](https://github.com/hyperledger/aries-rfcs/tree/910d79aa72a9e656f0003b4eab5d49549cca361e/concepts/0441-present-proof-best-practices) | ✅        |                                                            |
| [0453-issue-credential-v2](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0453-issue-credential-v2)                   | ✅        |                                                            |
| [0454-present-proof-v2](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0454-present-proof-v2)                         | ✅        |                                                            |
| [0510-dif-pres-exch-attach](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0510-dif-pres-exch-attach)                 | ✅        |                                                            |
| [0519-goal-codes](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/concepts/0519-goal-codes)                                     | ✅        |                                                            |
| [0557-discover-features-v2](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0557-discover-features-v2)                 | ✅        |                                                            |
| [0587-encryption-envelope-v2](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0587-encryption-envelope-**v2**)         | ❌        | Not part of core AIP 2.0 spec, but part of DIDComm V2 prep |
| [0592-indy-attachments](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0592-indy-attachments)                         | ✅        |                                                            |
| [0593-json-ld-cred-attach](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0593-json-ld-cred-attach)                   | ✅        |                                                            |
| [0627-static-peer-dids](https://github.com/hyperledger/aries-rfcs/tree/b3a3942ef052039e73cd23d847f42947f8287da2/features/0627-static-peer-dids)                         | ✅        |                                                            |
| [0646-bbs-credentials](https://github.com/hyperledger/aries-rfcs/blob/master/features/0646-bbs-credentials/README.md)                                                   | ✅        |                                                            |

## Non AIP supported RFCs

| RFC                                                                                                                                                             | Supported | Note                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| [0031-discover-features](https://github.com/hyperledger/aries-rfcs/blob/main/features/0031-discover-features/README.md)                                         | ✅        | V1                                                                       |
| [0212-pickup](https://github.com/hyperledger/aries-rfcs/blob/main/features/0212-pickup/README.md)                                                               | ✅        |                                                                          |
| [0684-pickup-v2](https://github.com/hyperledger/aries-rfcs/pull/685)                                                                                            | ⚠️        | Still a PR, may integrate to make delivery of mediation more error prone |
| [0641-linking-binary-objects-to-credentials](https://github.com/hyperledger/aries-rfcs/blob/main/features/0641-linking-binary-objects-to-credentials/README.md) | ✅        |                                                                          |
