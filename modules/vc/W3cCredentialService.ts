interface W3cCredentialService {
    deriveCredential(): Promise<void>
    verifyCredential(): Promise<void>
    verifyPresentation(): Promise<void>
    signCredential(): Promise<void>
    storeCredential(): Promise<void>
    signPresentation(): Promise<void>

    // Return credentials based on an initial filter from the presentation definition
    // schema.uri -> JSON-LD context or `@type` (type)
    // allowed proof_type values
    // Make sure the W3cCredentialRecord has the correct tags so we can filter
    // by these values
    getCredentials(query: {}): Promise<W3cCredentialRecord[]>
}