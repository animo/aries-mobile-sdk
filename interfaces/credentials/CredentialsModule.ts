import {
  OfferCredentialTemplate,
  CredentialExchangeRecord,
  ProposeCredentialTemplate,
  AcceptProposalTemplate,
  NegotiateProposalTemplate,
} from './interfaces'

interface CredentialModule {
  // Proposal
  proposeCredential(credentialTemplate: ProposeCredentialTemplate): Promise<CredentialExchangeRecord>
  acceptProposal(credentialRecordId: string, credentialTemplate: AcceptProposalTemplate): Promise<CredentialExchangeRecord>
  negotiateProposal(credentialRecordId: string, credentialTemplate: NegotiateProposalTemplate): Promise<CredentialExchangeRecord>

  // Offer
  offerCredential(credentialTemplate: OfferCredentialTemplate): Promise<CredentialExchangeRecord>

  createOutOfBandOffer(credentialTemplate: CredentialOfferTemplate): Promise<{
    offerMessage: OfferCredentialMessage
    credentialRecord: CredentialExchangeRecord
  }>

  acceptOffer(
    credentialRecordId: string,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialExchangeRecord>

  declineOffer(credentialRecordId: string): Promise<CredentialExchangeRecord>

  negotiateOffer(
    credentialRecordId: string,
    preview: CredentialPreview,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialExchangeRecord>

  acceptRequest(
    credentialRecordId: string,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialExchangeRecord>

  acceptCredential(credentialRecordId: string): Promise<CredentialExchangeRecord>

  // Record Methods
  getAll(): Promise<CredentialExchangeRecord[]>
  getById(credentialRecordId: string): Promise<CredentialExchangeRecord>
  findById(credentialRecordId: string): Promise<CredentialExchangeRecord | null>
  deleteById(credentialRecordId: string): Promise<void>
  findByQuery(query: Record<string, Tag | string[]>): Promise<CredentialExchangeRecord[]>
}

type Tag = string | boolean | number
