import {
  ProposeProofOptions,
  ProofRecord,
  AcceptProposalOptions,
  ProofRequestOptions,
  RequestedCredentials,
  RetrievedCredentials,
  AcceptRequestOptions,
  CreateOutOfBandProofRequestOptions,
  RequestPresentationMessage,
} from './interfaces'

interface ProofsModule {
  proposeProof(options: ProposeProofOptions): Promise<ProofRecord>

  acceptProposal(options: AcceptProposalOptions): Promise<ProofRecord>

  requestProof(options: ProofRequestOptions): Promise<ProofRecord>

  createOutOfBandRequest(
    options: CreateOutOfBandProofRequestOptions
  ): Promise<{ requestMessage: RequestPresentationMessage; proofRecord: ProofRecord }>

  acceptRequest(option: AcceptRequestOptions): Promise<ProofRecord>

  acceptPresentation(proofRecordId: string): Promise<ProofRecord>

  autoSelectCredentialsForProofRequest(retrievedCredentials: RetrievedCredentials): RequestedCredentials

  getAll(): Promise<ProofRecord[]>

  getById(proofRecordId: string): Promise<ProofRecord>

  findById(proofRecordId: string): Promise<ProofRecord | null>

  deleteById(proofId: string): Promise<void>
}

export { ProofsModule }
