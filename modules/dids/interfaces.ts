// to be defined
interface DidDocument {}
type DidDocumentMetadata = Record<string, unknown>

// Based on https://w3c-ccg.github.io/did-resolution/
interface DidResolveOptions {
  did: string
}
interface DidResolveResult {
  didResolutionMetadata: {}
  didDocument: DidDocument
  didDocumentMetadata: DidDocumentMetadata
}

// Based on https://identity.foundation/did-registration
type DidRegistrationExtraOptions = Record<string, unknown>
type DidRegistrationSecretOptions = Record<string, unknown>
type DidRegistrationMetadata = Record<string, unknown>
type DidDocumentOperation = 'setDidDocument' | 'addToDidDocument' | 'removeFromDidDocument'

interface DidOperationState {
  state: 'finished' | 'failed' | 'action' | 'wait'
  did: string
  secret?: DidRegistrationSecretOptions
  didDocument?: DidDocument
}

interface DidCreateOptions {
  method?: string
  did?: string
  options?: DidRegistrationExtraOptions
  secret?: DidRegistrationSecretOptions
  didDocument: DidDocument
}

interface DidCreateResult {
  jobId?: string
  didState: DidOperationState
  didRegistrationMetadata: DidRegistrationMetadata
  didDocumentMetadata: DidDocumentMetadata
}

interface DidUpdateOptions {
  did: string
  options?: DidRegistrationExtraOptions
  secret?: DidRegistrationSecretOptions
  didDocumentOperation?: DidDocumentOperation
  didDocument: DidDocument | Partial<DidDocument>
}

interface DidUpdateResult {
  jobId?: string
  didState: DidOperationState
  didRegistrationMetadata: DidRegistrationMetadata
  didDocumentMetadata: DidDocumentMetadata
}

interface DidDeactivateOptions {
  did: string
  options?: DidRegistrationExtraOptions
  secret?: DidRegistrationSecretOptions
}

interface DidDeactivateResult {
  jobId?: string
  didState: DidOperationState
  didRegistrationMetadata: DidRegistrationMetadata
  didDocumentMetadata: DidDocumentMetadata
}

export {
  DidResolveOptions,
  DidResolveResult,
  DidCreateOptions,
  DidUpdateOptions,
  DidDeactivateOptions,
  DidCreateResult,
  DidUpdateResult,
  DidDeactivateResult,
}
