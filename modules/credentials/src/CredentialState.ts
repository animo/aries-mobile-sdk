// CredentialState comes from issue credential v2 states
// https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md#states
// With the addition of the `Rejected`
export enum CredentialState {
  ProposalReceived = 'proposal-received',
  OfferSent = 'offer-sent',
  RequestReceived = 'request-received',
  CredentialIssued = 'credential-issued',
  ProposalSent = 'proposal-sent',
  OfferReceived = 'offer-received',
  RequestSent = 'request-sent',
  CredentialReceived = 'credential-received',
  Done = 'done',
  Declined = 'declined',
}
