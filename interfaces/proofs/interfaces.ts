interface ProofRecord {
  // to be defined
}

interface RequestPresentationMessage {
  // to be defined
}

interface ProofRequestOptions {
  // to be defined
}

interface RequestedCredentials {
  // to be defined
}

interface RetrievedCredentials {
  // to be defined
}

enum AutoAcceptProof {
  // Always auto accepts the proof no matter if it changed in subsequent steps
  Always = 'always',

  // Needs one acceptation and the rest will be automated if nothing changes
  ContentApproved = 'contentApproved',

  // DEFAULT: Never auto accept a proof
  Never = 'never',
}

interface IndyProofFormat {
  // to be defined
}

interface PresentationExchangeProofFormat {
  // to be defined
}

enum ProtocolVersion {
  v1 = '1',
  v2 = '2',
}

interface ProposeProofFormats {
  indy?: IndyProofFormat
  presentationExchange?: PresentationExchangeProofFormat
}

interface ProposeProofOptions {
  connectionId: string
  protocolVersion: ProtocolVersion
  proofFormat: ProposeProofFormats
  comment?: string
  autoAcceptProof?: AutoAcceptProof
}

interface AcceptProposalOptions {
  proofRecordId: string
  request?: {
    name?: string
    version?: string
    nonce?: string
  }
  comment?: string
}

interface AcceptRequestOptions {
  comment?: string
}

interface CreateOutOfBandProofRequestOptions {
  // to be defined
}

export {
  CreateOutOfBandProofRequestOptions,
  RequestPresentationMessage,
  AutoAcceptProof,
  AcceptRequestOptions,
  AcceptProposalOptions,
  ProofRecord,
  ProofRequestOptions,
  ProposeProofOptions,
  RequestedCredentials,
  RetrievedCredentials,
}
