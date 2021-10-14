import {
  PresentationPreview,
  ProposeProofConfig,
  ProofRecord,
  AcceptProposalConfig,
  CreateProofRequestOptions,
  ProofRequestConfig,
  RequestPresentationMessage,
  RequestedCredentials,
  ProofRequest,
  RetrievedCredentials,
  AcceptRequestConfig,
} from './interfaces'

interface ProofsModule {
  proposeProof(connectionId: string, presentationProposal: PresentationPreview, config?: ProposeProofConfig): Promise<ProofRecord>

  acceptProposal(proofRecordId: string, config?: AcceptProposalConfig): Promise<ProofRecord>

  requestProof(connectionId: string, proofRequestOptions: CreateProofRequestOptions, config?: ProofRequestConfig): Promise<ProofRecord>

  createOutOfBandRequest(
    proofRequestOptions: CreateProofRequestOptions,
    config?: ProofRequestConfig
  ): Promise<{ requestMessage: RequestPresentationMessage; proofRecord: ProofRecord }>

  acceptRequest(proofRecordId: string, requestedCredentials: RequestedCredentials, config?: AcceptRequestConfig): Promise<ProofRecord>

  acceptPresentation(proofRecordId: string): Promise<ProofRecord>

  getRequestedCredentialsForProofRequest(
    proofRequest: ProofRequest,
    presentationProposal?: PresentationPreview
  ): Promise<RetrievedCredentials>

  autoSelectCredentialsForProofRequest(retrievedCredentials: RetrievedCredentials): RequestedCredentials

  getAll(): Promise<ProofRecord[]>

  getById(proofRecordId: string): Promise<ProofRecord>

  findById(proofRecordId: string): Promise<ProofRecord | null>

  deleteById(proofId: string)
}

export { ProofsModule }
