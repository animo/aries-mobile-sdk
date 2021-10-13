interface ProofsModule {
  proposeProof(
    connectionId: string,
    presentationProposal: PresentationPreview,
    config?: {
      comment?: string
      autoAcceptProof?: AutoAcceptProof
    }
  ): Promise<ProofRecord>

  acceptProposal(
    proofRecordId: string,
    config?: {
      request?: {
        name?: string
        version?: string
        nonce?: string
      }
      comment?: string
    }
  ): Promise<ProofRecord>

  requestProof(
    connectionId: string,
    proofRequestOptions: CreateProofRequestOptions,
    config?: ProofRequestConfig
  ): Promise<ProofRecord>

  createOutOfBandRequest(
    proofRequestOptions: CreateProofRequestOptions,
    config?: ProofRequestConfig
  ): Promise<{
    requestMessage: RequestPresentationMessage
    proofRecord: ProofRecord
  }>

  acceptRequest(
    proofRecordId: string,
    requestedCredentials: RequestedCredentials,
    config?: {
      comment?: string
    }
  ): Promise<ProofRecord>

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
