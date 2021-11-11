import { AgentMessage } from '@aries-framework/core'
import { ProposeCredentialOptions, CredentialRecord, ProtocolVersion } from './interfaces'

interface CredentialService {
  createProposal(proposal: ProposeCredentialOptions): Promise<{ record: CredentialRecord; message: AgentMessage }>
}

class CredentialServiceV1 implements CredentialService {
  /**
   * This method should only handle the proposal.credentialFormats.indy format since it's the only
   * format supported by v1.0
   */
  public async createProposal(proposal: ProposeCredentialOptions): Promise<{ record: CredentialRecord; message: AgentMessage }> {
    return {
      /** return record and message */
    }
  }
}



class CredentialServiceV2 implements CredentialService {
  public async createProposal(proposal: ProposeCredentialOptions): Promise<{ record: CredentialRecord; message: AgentMessage }> {
    // should handle all formats in proposal.credentialFormats by querying and calling
    // its corresponding handler classes.

    return {
      /** return record and message */
    }
  }
}

export class CredentialModule {
  private getService(protocolVersion: ProtocolVersion) {
    const serviceMap = {
      [ProtocolVersion.V1_0]: CredentialServiceV1,
      [ProtocolVersion.V2_0]: CredentialServiceV2,
    }
    return new serviceMap[protocolVersion]()
  }

  public async proposeCredential(options: ProposeCredentialOptions): Promise<CredentialRecord> {
    const service = this.getService(options.protocolVersion)
    const { record, message } = await service.createProposal(options)
    this.messageSender.send(message)
    return record
  }
}
