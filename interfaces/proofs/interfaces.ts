interface ProofRecord {
  // to be defined
}

interface PresentationPreview {
  // to be defined
}

interface CreateProofRequestOptions {
  // to be defined
}

interface ProofRequestConfig {
  // to be defined
}

interface RequestPresentationMessage {
  // to be defined
}

interface RequestedCredentials {
  // to be defined
}

interface ProofRequest {
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

interface ProposeProofConfig {
  comment?: string
  autoAcceptProof?: AutoAcceptProof
}

interface AcceptProposalConfig {
  request?: {
    name?: string
    version?: string
    nonce?: string
  }
  comment?: string
}

interface AcceptRequestConfig {
  comment?: string
}

export {
  AutoAcceptProof,
  AcceptRequestConfig,
  AcceptProposalConfig,
  CreateProofRequestOptions,
  PresentationPreview,
  ProofRecord,
  ProofRequest,
  ProofRequestConfig,
  ProposeProofConfig,
  RequestPresentationMessage,
  RequestedCredentials,
  RetrievedCredentials,
}
