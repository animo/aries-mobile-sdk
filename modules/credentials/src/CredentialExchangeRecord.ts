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
}