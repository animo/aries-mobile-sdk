import { NymRole, GetNymResponse, SchemaTemplate, Schema, CredentialDefinitionTemplate, CredDef } from './interfaces'

interface LedgerModule {
  registerSchema(schema: SchemaTemplate): Promise<Schema>

  getSchema(id: string): Promise<Schema>

  registerCredentialDefinition(credentialDefinitionTemplate: Omit<CredentialDefinitionTemplate, 'signatureType'>): Promise<CredDef>

  getCredentialDefinition(id: string): Promise<CredDef>
}

export { LedgerModule }
