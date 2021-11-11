import { BaseRecord, AutoAcceptCredential } from '@aries-framework/core'

import { CredentialProtocolVersion } from './CredentialProtocolVersion'
import { CredentialRole } from './CredentialRole'
import { CredentialState } from './CredentialState'

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

    // FIXME: allow for multiple credentials
    // This should somehow link to the credentials that are stored
    // based on this credential exchange. Only applicable for the holder
    // This can point to either indy or jsonld creds so only an id is not enough
    // or it should include a prefix like (indy-671bc529-6ce2-4ef4-aaa6-8aa049d3b479 or w3c-c4cd9ad6-0b3c-4ac9-a09c-87db6b6b96a0)
    credentials: string[]
}