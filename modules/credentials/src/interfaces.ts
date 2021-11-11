import { AnyJson, JsonMap } from '../../generic'
type IssuerId = string

interface IssuerNode {
  id: string
  [x: string]: AnyJson
}

type Issuer = IssuerId | IssuerNode
type LDSignatureSuite = 'Ed25519Signature2018' | 'BbsBlsSignature2020'

export enum AutoAcceptCredential {
  Always = 'always',
  ContentApproved = 'contentApproved',
  Never = 'never',
}

interface W3cCredential {
  '@context': string | Record<string, AnyJson>
  issuer: Issuer
  type: string | string[]
  issuanceDate: string
  proof?: Record<string, AnyJson> | Array<Record<string, AnyJson>>
  [x: string]: AnyJson
}
export interface W3CCredentialFormat {
  credential: {
    '@context': string | Record<string, AnyJson>
    issuer: Issuer
    type: string | string[]
    issuanceDate: string
    proof?: Record<string, AnyJson> | Array<Record<string, AnyJson>>
    [x: string]: AnyJson
  }
  format: {
    linkedDataProof: {
      proofType: Array<string | LDSignatureSuite>
    }
  }
}

interface IndyCredentialAttribute {
  mimeType: string
  name: string
  value: string
}

/// CREDENTIAL OFFER
interface IndyOfferCredentialFormat {
  credentialDefinitionId: string
  attributes: IndyCredentialAttribute[]
}

interface OfferCredentialFormats {
  indy?: IndyOfferCredentialFormat
  w3c?: W3CCredentialFormat
}

interface OfferCredentialOptions {
  connectionId: string
  protocolVersion: ProtocolVersion
  credentialFormats: OfferCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

interface AcceptOfferOptions {
  credentialRecordId: string
  comment?: string
  autoAcceptCredential?: AutoAcceptCredential
}

interface NegotiateOfferOptions {
  credentialRecordId: string
  credentialFormats: OfferCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

/// CREDENTIAL PROPOSAL

interface IndyProposeCredentialFormat {
  attributes?: IndyCredentialAttribute[]
  schemaIssuerDid?: string
  schemaName?: string
  schemaVersion?: string
  schemaId?: string
  issuerDid?: string
  credentialDefinitionId?: string
}

interface ProposeCredentialFormats {
  indy?: IndyProposeCredentialFormat
  // If you want to propose an indy credential without attributes or
  // any of the other properties you should pass an empty object
  w3c?: W3CCredentialFormat
}

interface ProposeCredentialOptions {
  connectionId: string
  protocolVersion: ProtocolVersion
  credentialFormats: ProposeCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

interface AcceptProposalOptions {
  credentialRecordId: string
  comment?: string
  autoAcceptCredential?: AutoAcceptCredential
  credentialFormats: {
    indy?: {
      // Could be that credential definition id and attributes are already defined
      // But could also be that they are undefined. So we can't make them required
      credentialDefinitionId?: string
      attributes?: IndyCredentialAttribute[]
    }
    w3c?: {
      options: {} // TODO: depends on credential options we define globally (created, verificationMethod, etc...)
    }
  }
}

interface NegotiateProposalOptions {
  credentialRecordId: string
  credentialFormats: OfferCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

/// CREDENTIAL REQUEST

interface RequestCredentialFormats {
  // Indy cannot start from credential request
  w3c: W3CCredentialFormat
}

interface RequestCredentialOptions {
  connectionId: string
  // As indy cannot start from request and w3c is not supported in v1 we always use v2 here
  // protocolVersion: ProtocolVersion
  credentialFormats: RequestCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

interface AcceptRequestOptions {
  credentialRecordId: string
  comment?: string
  autoAcceptCredential?: AutoAcceptCredential
}

export {
  OfferCredentialOptions,
  ProposeCredentialOptions,
  AcceptProposalOptions,
  CredentialRecord,
  CredentialExchangeRecord,
  NegotiateProposalOptions,
  AcceptOfferOptions,
  NegotiateOfferOptions,
  RequestCredentialOptions,
  AcceptRequestOptions,
  CredentialRecordTags,
  IndyProposeCredentialFormat,
}
