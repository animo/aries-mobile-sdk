import { ConnectionRecord } from '../../connections/interfaces'
import { ProposeCredentialOptions, IndyProposeCredentialFormat, W3CCredentialFormat, ProtocolVersion } from '../interfaces'

abstract class CredentialService {
  /**
   * This *abstract* method is to be implemented by the `v1` and `v2` subclasses.
   * Its main purpose is to provide a unified API across the different protocol versions.
   *
   * @param connection the {@link ConnectionRecord} to create the proposal for.
   * @param options the protocol & format agnostic proposal options.
   */
  public abstract createProposal(connection: ConnectionRecord, options?: ProposeCredentialOptions)

  /**
   * This method creates a proposal that is specific to the **Indy** credential format.
   *
   * @remarks
   * This method is implemented here, rather than in {@link CredentialServiceV1} because
   * this functionality is required for both issue-credential v1 and v2.
   *
   * @param connection the {@link ConnectionRecord} to create the proposal for.
   * @param options the **Indy** format specific proposal options.
   */
  protected createIndyProposal(connection: ConnectionRecord, options?: IndyProposeCredentialFormat) {}
}

class CredentialServiceV1 extends CredentialService {
  /**
   * This implementation of {@link CredentialService.createProposal} simply calls
   * {@link CredentialService.createIndyProposal} as this is the only format supported by
   * issue-credential v1.
   *
   * @example
   * The **Indy** specific options could be passed as such:
   * ```
   * this.createIndyProposal(connection, options.credentialFormats.indy)
   * ```
   *
   * @param connection the {@link ConnectionRecord} to create the proposal for.
   * @param options the **Indy** format specific proposal options.
   * @returns
   */
  public createProposal(connection: ConnectionRecord, options?: ProposeCredentialOptions): void {}
}

class CredentialServiceV2 extends CredentialService {
  /** Call {@link CredentialService.createIndyProposal} if needed */

  /**
   * This implementation of {@link CredentialService.createProposal} should call either {@link }
   * @param connection
   * @param options
   */
  public createProposal(connection: ConnectionRecord, options?: ProposeCredentialOptions): void {}
  protected createW3cProposal(connection: ConnectionRecord, options?: W3CCredentialFormat) {}
}
