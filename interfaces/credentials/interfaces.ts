type AnyJson = boolean | number | string | null | JsonArray | JsonMap
interface JsonMap {
  [key: string]: AnyJson
}
interface JsonArray extends Array<AnyJson> {}

type IssuerId = string

interface IssuerNode {
  id: string
  [x: string]: AnyJson
}

type Issuer = IssuerId | IssuerNode
type LDSignatureSuite = 'Ed25519Signature2018' | 'BbsBlsSignature2020'

interface AutoAcceptCredential {} // Enum already exists in AFJ

interface LDCredential {
  '@context': string | Record<string, AnyJson>
  issuer: Issuer
  type: string | string[]
  issuanceDate: string
  proof?: Record<string, AnyJson> | Array<Record<string, AnyJson>>
  [x: string]: AnyJson
}
interface W3CCredentialFormat {
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

enum ProtocolVersion {
  v1 = '1',
  v2 = '2',
}

interface BaseRecord {
  id: string
  createdAt: Date
  updatedAt?: Date

  // record type for storage
  type: string

  // metadata allows to set arbitrary data on a record
  metadata: Record<string, AnyJson>
}

// Taken from Aries RFC roles
enum CredentialRole {
  Issuer = 'issuer',
  Holder = 'holder',
}

enum CredentialState {
  ProposalReceived = 'proposal-received',
  OfferSent = 'offer-sent',
  RequestReceived = 'request-received',
  CredentialIssued = 'credential-issued',
  ProposalSent = 'proposal-sent',
  OfferReceived = 'offer-received',
  RequestSent = 'request-sent',
  CredentialReceived = 'credential-received',
  Done = 'done',
}

interface CredentialExchangeRecord extends BaseRecord {
  // in case of connection less exchange, connection id can be null
  connectionId?: string
  protocolVersion: ProtocolVersion

  threadId: string
  // FIXME: what if the state will differ in a future version?
  state: CredentialState // enum as defined in Aries RFC

  // If auto accept is not defined we use the agent configuration
  autoAcceptCredential?: AutoAcceptCredential

  // This can be a derived getter property (based on state and whether we have a credential)
  role: CredentialRole

  // FIXME: Not sure if we want to store messages in the credential exchange record
  //  or as separate record (see commented interface below for an idea of how that would work)
  messages: Array<JsonMap>
}

// interface MessageRecord {
//   message: AnyJson
//   createdAt: Date
//   threadId: string
//   connectionId?: string
//   role: MessageRole // 'sender' or 'receiver'

//   // Can be computed
//   protocolName: string
//   versionMajor: string
//   versionMinor: string
//   messageType: string
// }

// const messages = messageRepository.findMessagesByQuery({
//   threadId: "f5dedc93-6552-4757-85e2-e452da9656cd",
//   protocolName: 'issue-credential',
//   versionMajor: 2,
//   messageType: 'propose-credential'
// })

// Credential Record is only used for holding a credential
interface CredentialRecord {
  id: string
  issuedAt: Date
  connectionId?: string
  credentials: [
    {
      type: 'IndyCredential'
      // credentialId points to other record
      credentialId: string
    },
    {
      type: 'W3CCredential'
      credentialId: string
    }
  ]

  // TODO: should have easy way to access credential data
}

// FIXME: define structure for actual credential storage
// We need to do a bit more research on how indy credentials
// are stored. But we need to define the LD credential storage
// structure ourselves
interface CredentialStorage {
  credential: LDCredential
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

interface OfferCredentialTemplate {
  connectionId: string
  protocolVersion: ProtocolVersion
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

interface ProposeCredentialTemplate {
  connectionId: string
  protocolVersion: ProtocolVersion
  credentialFormats: ProposeCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

interface AcceptProposalTemplate {
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

interface NegotiateProposalTemplate {
  credentialFormats: OfferCredentialFormats
  autoAcceptCredential?: AutoAcceptCredential
  comment?: string
}

export {
  OfferCredentialTemplate,
  ProposeCredentialTemplate,
  AcceptProposalTemplate,
  CredentialRecord,
  CredentialExchangeRecord,
  NegotiateProposalTemplate,
}
