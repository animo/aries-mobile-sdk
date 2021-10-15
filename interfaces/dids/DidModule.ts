import {
  DidCreateOptions,
  DidCreateResult,
  DidDeactivateOptions,
  DidDeactivateResult,
  DidResolveOptions,
  DidResolveResult,
  DidUpdateOptions,
  DidUpdateResult,
} from './interfaces'

interface DidModule {
  resolve(options: DidResolveOptions): Promise<DidResolveResult>
  create(options: DidCreateOptions): Promise<DidCreateResult>
  update(options: DidUpdateOptions): Promise<DidUpdateResult>
  deactivate(options: DidDeactivateOptions): Promise<DidDeactivateResult>
}
