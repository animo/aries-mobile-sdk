# CredentialsModule -- examples

### Offer credential

```typescript
const record = await agent.credentials.offerCredential({
  connectionId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  protocolVersion: '2', // Enum
  comment: 'Some thoughts...',
  autoAcceptCredential: 'contentApproved', // Enum
  credentialFormats: {
    indy: {
      credentialDefinitionId: 'WgWxqztrNooG92RXvxSTWv:3:CL:20:tag',
      attributes: [
        {
          name: 'givenName',
          value: 'JOHN',
        },
        {
          name: 'familyName',
          value: 'SMITH',
        },
        {
          mimeType: 'text/plain',
          name: 'gender',
          value: 'Male',
        },
      ],
    },
    w3c: {
      credential: {
        '@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/citizenship/v1'],
        credentialSubject: {
          familyName: 'SMITH',
          gender: 'Male',
          givenName: 'JOHN',
          type: ['PermanentResident', 'Person'],
        },
        description: 'Government of Example Permanent Resident Card.',
        identifier: '83627465',
        issuanceDate: '2019-12-03T12:19:52Z',
        issuer: 'did:key:z6MkmjY8GnV5i9YTDtPETC2uUAW6ejw3nk5mXF5yci5ab7th',
        name: 'Permanent Resident Card',
        type: ['VerifiableCredential', 'PermanentResidentCard'],
      },
      format: {
        // For the first version we don't intent to support JWT vc
        // Thi is to show how the API can be extended in the future
        jwt: {
          // JWT doesn't support multiple signatures, so maybe this shouldn't be an array?
          alg: ['EdDSA', 'another'],
        },
        linkedDataProof: {
          // For the first version we only intend to support a single proof
          proofType: ['Ed25519Signature2018', 'BbsBlsSignature2020'],
        },
      },
      options: {
        created: '2021-08-21T12:00:10',
        challenge: 'db975256-9140-45f3-81f0-a71bc8ac1bb9',
        domain: 'example.com',
      },
    },
  },
})
```
