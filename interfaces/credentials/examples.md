# CredentialsModule -- examples

### Offer credential

```typescript
const record = await agent.credentials.offerCredential({
  connectionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  protocolVersion: 2,
  comment: "Some thoughts...",
  autoAcceptCredential: "contentApproved",
  credentialFormats: {
    indy: {
      credentialDefinitionId: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag",
      preview: {
        "@type": "issue-credential/2.0/credential-preview",
        attributes: [
          {
            "mime-type": "text/plain",
            "name": "givenName",
            "value": "JOHN"
          },
          {
            "mime-type": "text/plain",
            "name": "familyName",
            "value": "SMITH"
          },
          {
            "mime-type": "text/plain",
            "name": "gender",
            "value": "Male"
          },
        ]
      }
    },
    linkedDataProof: {
      credential: {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/citizenship/v1"
        ],
        credentialSubject: {
          familyName: "SMITH",
          gender: "Male",
          givenName: "JOHN",
          type: [
            "PermanentResident",
            "Person"
          ]
        },
        description: "Government of Example Permanent Resident Card.",
        identifier: "83627465",
        issuanceDate: "2019-12-03T12:19:52Z",
        issuer: "did:key:z6MkmjY8GnV5i9YTDtPETC2uUAW6ejw3nk5mXF5yci5ab7th",
        name: "Permanent Resident Card",
        type: [
          "VerifiableCredential",
          "PermanentResidentCard"
        ]
      },
      options: {
        "proofType": "Ed25519Signature2018"
      }
    } 
  }
})
```