# Present Proof Implementers Guide

This documents gives an overview of the envisioned architecture for the AIP 2.0 compliant `ProofModule`.

> :warning: **This is a work-in-progress document**: Additional content will be added over time.
---

## Relevant standards
- [Aries RFC: present-proof v1]()
- [Aries RFC: present-proof v2]()
- [DIF: presentation exchange](https://identity.foundation/presentation-exchange/)

## Relevant libraries


## Envisioned architecture
![envisioned-architecture](https://www.plantuml.com/plantuml/png/ZLRBRjim4BppAnQ-k3tOHNeEWWHrYmPDYo0EWXReXPRM5c69D4Wgjj7stxkag0TbMKvE4NTsziKT-jPOhcrPv8oPhP0xhda1Evvi-GQNzfWZQ4mibviSEu12IPLaMXK8LfV8c5Kxi0fMobfLG2gSar2IiK05a-ygBOdjWHzHJ-0F0qXoRWmyQgNMbP7zw-2Ng5z54ZdmbR6Q9xRo2O26w9EIiehQjpnWka5TdzBnD1ZkPNfyMJor51hJdysNiouNtphuEotGt9ajrnMBa1RrcbEM3ljLvMaR9ev2FEVCounJs0UnqjpHnx2XEFV6b2DnpfbxSM9OF8vm-d8rVFpHmTkSlEsBqWMtKUzwHmknVjHeK5hkXlJva6HqhJ2W8iQscoV7BwZ5Mg1cbtYZSKjbiRwSQjtCUGe0pvamWKdZhY8om64bP2ha9g3eRjiCuNfrGyV7MK84X-iFgnl8VJ-FDIpZ5eYFjiIwGCv7uhxnCtu6CssSR_39wud0ktqcaipvSvTBJZKNb0sibORAFTs-dxFWzqkLi1Tvxeg3ZB-YItAlj3xIegZIKd1YqcAJMOBiWnUNAIHSGcdGPyTpZJmz0Xw4iLHlr6G8JbLxX3IMi7D_YCJZkihSqYP29xJRaph92N3ZC-wPVDkyqV_NsVOdt2aZhABaXnMY1RY0qw0c6dC_TCCwCWApsKqi4NtZgLImQQqtFShwU9RZsWwwnZ3VRyB5cZE569MglIJGgMgC0EkXjD8GxohCojtixr3bpTuEGde5b7NpEXrdxJhN5TOiONr7bpiqh-ToadwdrW3fP_zcn0MjwPPpCefprbPveXMf8PMc39hgX-HIbyQJR-OLw1gyNpGVlZaAw-LbR_AS4HaagjWfwSMjqRdV4WyahfBdy5GQwwJ8Av5VqHzNZ3bgc3lIkVlsj9rlkgudLvXoe0H67xMpNeClvNIKh7Lq3_bRiTMmteBkFlaXyUZbZ1AFtzIpwD6NU3fglb3k6UoPSWVGKRdqTqiwJpyE_mC0 "envisioned-architecture")

### Description of the components

#### ProofModule
This is the public API that is presented to the framework consumer through `agent.proofs.*`. It serves as the entry point to all proof related functionality.

#### ProofService (abstract)
This **abstract** class is introduced because `ProofServiceV1` and `ProofServiceV2` will have some common logic. By creating this abstract `ProofService` class and making `ProofServiceV1` and `ProofServiceV2` extend it, we can put communal logic in the base class to avoid code duplication.

#### ProofServiceV1
This class contains all the logic that is specific to the *present-proof-v1* protocol. Its main purpose is to handle the creation of *present-proof-v1* DIDComm messages. It is in essence the same as what now is the `ProofService`.

#### ProofServiceV2
This class contains all the logic that is specific to the *present-proof-v2* protocol. Its main purpose is to handle the creation of *present-proof-v2* DIDComm messages.

#### ProofFormat (interface)

#### IndyFormat
This class represents the Indy (anon-creds) proof format. It's essentially the format that

#### DifPresentationExchangeFormat

#### DifPresentationExchangeService


#### IndyVerifier (interface)
This interface serves as a mechanism to help transition from the usage of the [*indy-sdk*](https://github.com/hyperledger/indy-sdk) (represented by `IndySDK`) to the newer *indy-credx* (represented by `CredX`) library that is part of [*indy-shared-rs*](https://github.com/hyperledger/indy-shared-rs).

#### IndySdk
This class wraps the [*indy-sdk*](https://github.com/hyperledger/indy-sdk) library.

#### CredX
This class wraps the [*indy-credx*](https://github.com/hyperledger/indy-shared-rs) library.

> NOTE: This class doesn't have to be implemented from the start, as IndySDK offers the same functionality. 