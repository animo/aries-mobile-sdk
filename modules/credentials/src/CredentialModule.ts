import {
  OfferCredentialOptions,
  ProposeCredentialOptions,
  AcceptProposalOptions,
  NegotiateProposalOptions,
  AcceptOfferOptions,
  NegotiateOfferOptions,
  RequestCredentialOptions,
  AcceptRequestOptions,
} from './interfaces'

import { CredentialExchangeRecord } from './CredentialExchangeRecord'

interface CredentialModule {
  // Proposal
  proposeCredential(credentialOptions: ProposeCredentialOptions): Promise<CredentialExchangeRecord>
  acceptProposal(credentialOptions: AcceptProposalOptions): Promise<CredentialExchangeRecord>
  negotiateProposal(credentialOptions: NegotiateProposalOptions): Promise<CredentialExchangeRecord>

  // Offer
  offerCredential(credentialOptions: OfferCredentialOptions): Promise<CredentialExchangeRecord>
  acceptOffer(credentialOptions: AcceptOfferOptions): Promise<CredentialExchangeRecord>
  declineOffer(credentialRecordId: string): Promise<CredentialExchangeRecord>
  negotiateOffer(credentialOptions: NegotiateOfferOptions): Promise<CredentialExchangeRecord>

  // Request
  requestCredential(credentialOptions: RequestCredentialOptions): Promise<CredentialExchangeRecord>
  acceptRequest(credentialOptions: AcceptRequestOptions): Promise<CredentialExchangeRecord>

  // Credential
  acceptCredential(credentialRecordId: string): Promise<CredentialExchangeRecord>

  // Record Methods
  getAll(): Promise<CredentialExchangeRecord[]>
  getById(credentialRecordId: string): Promise<CredentialExchangeRecord>
  findById(credentialRecordId: string): Promise<CredentialExchangeRecord | null>
  deleteById(credentialRecordId: string): Promise<void>
  findByQuery(query: Record<string, Tag | string[]>): Promise<CredentialExchangeRecord[]>
}

type Tag = string | boolean | number
