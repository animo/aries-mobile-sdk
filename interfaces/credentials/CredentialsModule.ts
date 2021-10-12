import { CredentialOfferTemplate } from './interfaces';

interface CredentialModule {
  proposeCredential(connectionId: string, config?: CredentialProposeOptions): Promise<CredentialRecord>;

  acceptProposal(
    credentialRecordId: string,
    config?: {
      comment?: string;
      credentialDefinitionId?: string;
      autoAcceptCredential?: AutoAcceptCredential;
    }
  ): Promise<CredentialRecord>;

  negotiateProposal(
    credentialRecordId: string,
    preview: CredentialPreview,
    config?: {
      comment?: string;
      credentialDefinitionId?: string;
      autoAcceptCredential?: AutoAcceptCredential;
    }
  ): Promise<CredentialRecord>;

  offerCredential(credentialTemplate: CredentialOfferTemplate): Promise<CredentialRecord>;

  createOutOfBandOffer(credentialTemplate: CredentialOfferTemplate): Promise<{
    offerMessage: OfferCredentialMessage;
    credentialRecord: CredentialRecord;
  }>;

  acceptOffer(
    credentialRecordId: string,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialRecord>;

  declineOffer(credentialRecordId: string): Promise<CredentialRecord>;

  negotiateOffer(
    credentialRecordId: string,
    preview: CredentialPreview,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialRecord>;

  acceptRequest(
    credentialRecordId: string,
    config?: { comment?: string; autoAcceptCredential?: AutoAcceptCredential }
  ): Promise<CredentialRecord>;

  acceptCredential(credentialRecordId: string): Promise<CredentialRecord>;

  getAll(): Promise<CredentialRecord[]>;

  getById(credentialRecordId: string): Promise<CredentialRecord>;

  findById(connectionId: string): Promise<CredentialRecord | null>;

  deleteById(credentialId: string): Promise<void>;
}
