// Most of these tags can be computed from the credential values on save
export interface W3cCredentialRecordTags {
    proofType: string[]
    context: string[]
    type: string[]
    expandedType: string[]
    schemaIds: string[]
    subjectIds: string[]
    issuerId: string

    // givenId is the value of the `id` in the credential itself.
    // This is different form the record id
    givenId: string

}

export interface W3cCredentialRecord {
    // FIXME: maybe this should be a more well-defined type, but now lets use Record
    credential: Record<string, unknown>

    // For PE we need to filter credentials based on the expanded @type
    // values. As this requires a JSON-LD processor with access to the context
    // it is best to store the computed values
    expandedType: string[]
}