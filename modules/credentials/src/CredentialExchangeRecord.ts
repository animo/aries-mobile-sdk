

import { CredentialProtocolVersion } from './models/CredentialProtocolVersion'
import { CredentialRole } from './models/CredentialRole'
import { CredentialState } from './models/CredentialState'

export interface CredentialRecordTags {
    threadId: string
    protocolVersion: CredentialProtocolVersion
    state: CredentialState
    connectionId?: string
}

// Base Record already available in AFJ
export interface CredentialExchangeRecord extends BaseRecord {
    // in case of connection less exchange, connection id can be null
    connectionId?: string

    // protocolVersion is the protocol version being used for the credential exchange
    protocolVersion: CredentialProtocolVersion
  
    // self-explanatory
    threadId: string

    // enum as defined in Issue Credential V2 protocol
    state: CredentialState 
  
    // Auto accept enum is already available in AFJ.
    // If auto accept is not defined we use the agent configuration
    autoAcceptCredential?: AutoAcceptCredential
  
    // This can be a derived getter property (based on state and whether we have a credential)
    role: CredentialRole
}

export interface CredentialFormatRecord {
    // Pointer to the credential exchange record
    credentialExchangeId?: string

    // Pointer to the stored credential
    // FIXME: do we need a type or something?
    credentialId?: string
}

export interface IndyCredentialFormatRecord extends CredentialFormatRecord {
    // Credential request metadata
    requestMetadata?:  Record<string, unknown>

    // -- Issuer data -- //
    // Revocation metadata
    revocationRegistryId?: string
    credentialRevocationId?: string

    // Credential metadata (can be computed?)
    schemaId?: string
    credentialDefinitionId?: string

    // FIXME: do we want to store credentials?
    attributes: string[]
}


// This doesn't have any unique values yet, but will definitely get properties
// over time if e.g. revocation support is added for w3c credentials.
export interface JsonLdCredentialFormatRecord extends CredentialFormatRecord {
}

