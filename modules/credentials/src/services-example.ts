import { AgentMessage } from '@aries-framework/core'
import { ProposeCredentialOptions, AcceptProposalOptions } from './interfaces'
import { CredentialProtocolVersion } from './CredentialProtocolVersion'
import { CredentialExchangeRecord } from './CredentialExchangeRecord'

interface CredentialServiceCreateReturnType { 
  record: CredentialExchangeRecord;
  message: AgentMessage
}

interface CredentialService {
  createProposal(proposal: ProposeCredentialOptions): Promise<CredentialServiceCreateReturnType>
}

class CredentialServiceV1 implements CredentialService {
  public async createProposal(proposal: ProposeCredentialOptions): Promise<CredentialServiceCreateReturnType> {
    // should only handle the proposal.credentialFormats.indy
    return {
      /** return record and message */
    }
  }
}

class CredentialServiceV2 implements CredentialService {
  public async createProposal(proposal: ProposeCredentialOptions): Promise<CredentialServiceCreateReturnType> {
    // should handle all formats in proposal.credentialFormats by querying and calling
    // its corresponding handler classes.

    return {
      /** return record and message */
    }
  }
}

export class CredentialModule {
  private getService(protocolVersion: CredentialProtocolVersion) {
    const serviceMap = {
      [CredentialProtocolVersion.V1_0]: CredentialServiceV1,
      [CredentialProtocolVersion.V2_0]: CredentialServiceV2,
    }
    return new serviceMap[protocolVersion]()
  }

  public async proposeCredential(options: ProposeCredentialOptions): Promise<CredentialExchangeRecord> {
    const service = this.getService(options.protocolVersion)
    const { record, message } = await service.createProposal(options)
    this.messageSender.send(message)
    return record
  }

  public async acceptProposal(options: AcceptProposalOptions): Promise<CredentialExchangeRecord> {
    const credentialRecord = await this.credentialRepository.getById(options.credentialRecordId)
    const service = this.getService(credentialRecord.protocolVersion)
    const { record, message } = await service.acceptProposal(credentialRecord)
    await this.messageSender.send(message)
    return record
  }
}
