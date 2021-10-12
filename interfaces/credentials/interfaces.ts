interface IndyCredentialFormat {
  credentialDefinitionId: string
  preview: CredentialPreview
  attachments?: Attachment[]
  linkedAttachments?: LinkedAttachment[]
}


type IssuerId = string;

interface IssuerNode {
  id: string;
  [x: string]: any;
}

type Issuer = IssuerId | IssuerNode;

interface LinkedDataCredentialFormat {
  "@context": any
  issuer: Issuer
  type: string | string[]
  issuanceDate: string
  proof?: any
  [x: string]: any
}

interface CredentialFormats {
  indy?: IndyCredentialFormat
  linkedDataProof?: LinkedDataCredentialFormat
}

interface CredentialOfferTemplate {
  connectionId: string
  comment?: string
  autoAcceptCredential?: AutoAcceptCredential
  credentialFormats: CredentialFormats
}

export { CredentialOfferTemplate }