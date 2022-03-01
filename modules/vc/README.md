# JSON-LD Credential Flow

## Issuing a Credential

### Offer Credential

1. `V2CredentialService` calls `JsonLdCredentialFormatService`
2. `JsonLdCredentialFormatService` validates the input and creates the attachment data

### Process Credential Request

TODO

### Issue Credential

1. `V2CredentialService` calls `JsonLdCredentialFormatService`
2. `JsonLdCredentialFormatService` validates the input
3. `JsonLdCredentialFormatService` calls `W3cCredentialService.signCredential`
4. `JsonLdCredentialFormatService` creates the attachment data

## Receiving a Credential

### Create Credential Proposal

TODO

### Process Credential Offer

TODO

### Create Credential Request

TODO

### Process Credential

1. `V2CredentialService` calls `JsonLdCredentialFormatService`
2. `JsonLdCredentialFormatService` validates the input
3. `JsonLdCredentialFormatService` calls `W3cCredentialService.storeCredential`

## Proving

### Create Presentation Proposal

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` calls `PEX.validateDefinition()`
3. `DifPeProofFormatService` creates the attachment data

### Process Presentation Request

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` calls `PEX.validateDefinition()`

### Create Presentation

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` retrieves the initial set of credentials (based on definition schema requirements) from storage
3. `DifPeProofFormatService` calls `PEX.verifiablePresentationFrom()`
   1. Provide a callback that internally calls `W3cCredentialService.signPresentation()`
      - TODO: figure out how this works with selective disclosure
      - deriveProof method in ACA-Py signature suite: https://github.com/hyperledger/aries-cloudagent-python/blob/main/aries_cloudagent/vc/ld_proofs/suites/bbs_bls_signature_proof_2020.py#L62
4. `DifPeProofFormatService` creates the attachment data from the submission


## Verifying

### Process Presentation Proposal

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` calls `PEX.validateDefinition()`

### Create Presentation Request

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` calls `PEX.validateDefinition()`

### Process Presentation

1. `V2ProofService` calls `DifPeProofFormatService`
2. `DifPeProofFormatService` calls `PEX.evaluatePresentation()`
3. `DifPeProofFormatService` calls `W3cCredentialService.verifyPresentation()`
