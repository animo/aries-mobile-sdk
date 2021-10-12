interface LedgerModule {
  registerPublicDid(
    did: string,
    verkey: string,
    alias: string,
    role?: NymRole
  ): Promise<string>;

  getPublicDid(did: string): Promise<GetNymResponse>;

  registerSchema(schema: SchemaTemplate): Promise<Schema>;

  getSchema(id: string): Promise<Schema>;

  registerCredentialDefinition(
    credentialDefinitionTemplate: Omit<
      CredentialDefinitionTemplate,
      "signatureType"
    >
  ): Promise<CredDef>;
  
  getCredentialDefinition(id: string): Promise<CredDef>;
}
