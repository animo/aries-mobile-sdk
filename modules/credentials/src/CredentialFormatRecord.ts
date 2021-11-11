
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

    // FIXME: do we want to store credential attributes? These are already stored 
    // In the indy credential record so not so sure what it adds
    attributes: string[]
}


// This doesn't have any unique values yet, but will definitely get properties
// over time if e.g. revocation support is added for w3c credentials.
export interface JsonLdCredentialFormatRecord extends CredentialFormatRecord {}
