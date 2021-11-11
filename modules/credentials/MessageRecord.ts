import { AnyJson } from '../generic'

export enum DidCommMessageRole {
    Sender = 'sender',
    Receiver = 'receiver'
}

// Most of these values can be computed
export interface DidCommMessageRecordTags {
    // Can be computed
    protocolName: string
    versionMajor: string
    versionMinor: string
    messageType: string
    messageId: string

    threadId: string
    role: DidCommMessageRole
    connectionId?: string
}

export interface DidCommMessageRecord extends BaseRecord {
    message: AnyJson
    threadId: string
    role: DidCommMessageRole

    // FIXME: If we don't have a connectionId (e.g. with OOB)
    // Should this also account for that? Or does the OOB record point 
    // to the specific record message
    connectionId?: string

}