# Issue Credential Implementers Guide

This documents gives an overview of the envisioned architecture for the AIP 2.0 compliant `CredentialModule`.

> :warning: **This is a work-in-progress document**: Additional content will be added over time.

---

## Table of contents

- [Considerations](#consideration)
- [Architecture overview](#architecture-overview)
  - [Current Architecture](#current-architecture)
  - [Envisioned Architecture](#envisioned-architecture)
- [File Structure](#file-structure)
- [Requirements](#requirements)
  - [Unified API](#unified-api)
  - [Auto accept](#auto-accept)
  - [Credential formats](#credential-formats)
  - [Storage records](#storage-records)
  - [Typings](#typings)
- [Code examples](#code-examples)

---

## Considerations

The design of this architecture tries to take the following considerations into account:

- We offer users of AFJ a unified API, regardless of protocol versions.
  - This means we offer a single `CredentialModule` to the user, as opposed to a `V1CredentialModule` and a `V2CredentialModule` as is for example the case in ACA-Py.
- There is a architectural separation between the protocol logic and credential formats.
  - The reasoning behind this is that we can add support for other credential formats over time, with as little modifications as possible to the protocol logic.
  - This applies for `issue-credential v2` related logic, as `issue-credential v1` only supports Indy based credentials.
- There is an architectural separation between the logic related to cryptography and storage, credential format related logic and DIDComm/protocol logic.
  - The reasoning behind this is that we for example can alter the storage related logic later on, with as little modifications as possible to the protocol or format related logic.

---

## Architecture overview

This section offers a visual overview of the current architecture versus the envisioned architecture. Most components (although not all) of the envisioned architecture diagram are also represented in the file structure under the [File structure](#file-structure) section.

### Current Architecture

![current-architecture](https://www.plantuml.com/plantuml/png/VP9BRiCm34JtF0MHJLQ-GX6WcmP8Dyq9L8brXCYYGL4jZ21thuquy2U2jvet96UWGr8Zcfi0aAu-jaPCWwsnLrFJMRj0A6JLn3hGd6Wuihq8DuGgkPUKMrJ6RrRb1fqVN9uZm3WBTv_iSZ_kP3gI7Tu0qGQJ4huBEOhgJNWGS9-PpYI_tcwwHcHIECR7yhLo8bUJh5-FqNKV75nPEQQK9sL-sXUrdBooT5lNJTHWteyb20KpN9XWdHwhwgqGheoz98Nzix3IXgTM1VhHeh_0Ygyl0xmihm0w_eizzrhdDhiik0JdHIEpGW4E55t_T_y1 'current-architecture')

### Envisioned Architecture

![envisioned-architecture](https://www.plantuml.com/plantuml/png/bPOzRzim48Pt_WeYYoODRVOWGOoYGPmb1fAkP-bY4vP8uKYrCDB-zv8GPP8IfIIRpNlkaoyFkjK6oFHjmvW-2Ta1GSixg4vmm9qvDyW9AmFoq604j4ggwaYgHMweHyQCwhXHVA-CKIslXNCIIZBcG_6h9rNtDjeMpaXN_9rnNZMWDRydh54Q0Sr0i7-HqmxfjwWIBzXhGr2PoD5J8QIISiW_jMonFY2Df_Quy8O7MPzVDiz9LRyk_vnrjtcC-3iIgE_q2MY88gH1UWDRgcD_ggOEQT8iDiwIUNS4ctOhzWGkV8hbyZnetQ_aMJ9FygHOvcAywUNRYksxSmpL1U27eXPCCih9qLR84zORCE0DIQGmpzdnK7Ye-FNw_j95hA9dx9GMHj5vJNw1Siw5rojX0qv9cas5oilo9YF2F3PJ92j6RUSoZBQomJUJzS-m90v71wSYBtW6hTKVQScvLZ-Y9rfX6P7mik_Al-kZkQXc6Svrs2SJZowC1LcDSqY2Uc5DbURdcqFpdKMJy5osfwzXS_t7tSokQiawleRm-s8Ujbd6C2wsp6Gy4R-fOYuOorbeTN4jUcMtOR4QB3YwPVrPTcZ_CtIyrdtXYUAJmjEti4YlRjjYrVn1kmliGhiPEccNiLkKjVqI-0y0 'envisioned-architecture')

---

## File Structure

The following snippet contains an ASCII tree of the envisioned file structure with comments that describe some of the individual folders and files:

```
.
└── src
    └── modules
        ├── credentials
        │   ├── v1
        │   │   ├── messages
        │   │   │   ├── V1ProposeCredentialMessage.ts
        │   │   │   └── ... other messages ...
        │   │   ├── handlers
        │   │   │   ├── V1ProposeCredentialHandler.ts
        │   │   │   └── ... other handlers ...
        │   │   └── V1CredentialService.ts                      # only supports indy format, so can use that class directly
        │   └── v2
        │       ├── messages
        │       │   ├── V2ProposeCredentialMessage.ts
        │       │   └── ... other messages ...
        │       ├── handlers
        │       │   ├── V2ProposeCredentialHandler.ts
        │       │   └── ... other handlers ...
        │       ├── V2CredentialService.ts                      # declares which formats it supports through mapping
        │       ├── formats
        │       │   ├── CredentialFormatService.ts
        │       │   ├── indy
        │       │   │   └── IndyCredentialFormatService.ts
        │       │   └── jsonld
        │       │       └── JsonLdCredentialFormatService.ts
        │       ├── CredentialRecord.ts
        │       ├── CredentialRepository.ts
        │       ├── CredentialService.ts                        # can return implementation specific handlers (v1, v2, etc...) for registration in the dispatcher to the module
        │       └── CredentialModule.ts
        ├── indy                                                # all logic in this folder is agnostic of DIDComm and its protocols
        │   ├── IndyIssuerService.ts                            # handles issuance of indy credentials
        │   ├── IndyHolderService.ts                            # handles receiving/holding of indy credentials
        │   └── IndyVerifierService.ts                          # handles verification of indy credentials
        └── w3c                                                 # all logic in this folder is agnostic of DIDComm and its protocols
            ├── W3cVcService.ts                                 # handles issuing/holding/proving/verifying w3c credentials
            ├── W3cVcRecord.ts                                  # w3c vc record to store received credentials
            └── W3cVcRepository.ts
```

---

## Requirements

This section describes the requirements that need to be taken into account.

### Unified API

There **MUST** be a single `CredentialModule` that handles both `issue-credential` `v1` and `v2`. This is to ensure users of AFJ have a single entry-point to issuance related functionality. Non-public components/classes **MAY** discriminate between protocol versions.

### Auto accept

The implementation should take the `AutoAcceptCredential` parameter into account, especially the value of `ContentApproved`. This means that the issue-credential flow is completely automated once the **holder** has approved the content **AND** if the content hasn't changed in the mean time.

### Credential formats

One of the primary features of [issue-credential v2](https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md), is the introduction of new credential formats. In AFJ, we're only looking to add support for W3C JSON-LD credentials for now. However, there **MUST** be an architectural separation between the credential format related logic and all other logic. This is to ensure we can add other formats over time, without having to modify a lot of the other logic.

### Storage records

In the current architecture, we store DIDComm messages related information in the credential record itself. Because Indy records don't allow us to add custom fields and because of the introduction of the `W3cCredentialRecord` we need another way to bind `CredentialExchangeRecord`s and `DidCommMessageRecord`s to the Indy and W3C credential record types.

In order to bind the `CredentialExchangeRecord` to the `DidCommMessageRecord`, the `threadId` value present in both record classes can be used. To link the `CredentialExchangeRecord` to the W3C and Indy credential records, we've added a `credentials` array to `CredentialExchangeRecord`. This array is of type `CredentialRecordBinding` which contains `credentialRecordType` (either Indy or W3C) and `credentialRecordId` fields. The `credentialRecordType` field can be used to identify what repository to query for the `credentialId` in question.

> NOTE: All types mentioned above can be found in the `/src` directory next to this document.

### External dependencies

With the introduction of new credential formats, we need additional logic to handle signatures, verification and for the creation of verifiable presentations. For Indy based credentials, we can use the Indy SDK / Shared Components. For W3C based credentials, we need another solution.

#### VC-JS

Digital Bazaar has created various libraries we can use for this purpose such as [VC-JS](https://github.com/digitalbazaar/vc-js) and various signature suits. However, these libraries rely on NodeJS or browser specific crypto dependencies, making it impossible for usage within React Native. That being said, there are forks of this project available, that rely on pure JavaScript crypto implementations that can be used.

The React Native compatible VC-JS fork we're looking to adopt is [this one](https://github.com/digitalcredentials/vc-js) by the Digital Credentials Consortium.

#### Signature Suits (Ed25519Signature2018)

The Digital Credentials Consortium has also created a React Native compatible version of the [ed25519-signature-2020](https://github.com/digitalcredentials/ed25519-signature-2020) signature suit. However, AIP 2.0 requires us to use Ed25519Signature2018 instead of Ed25519Signature2020, which (to our knowledge) doesn't have a React Native compatible version out there. Thus, this has to be created.

That being said, the cryptography of the Ed25519Signature2018 and Ed25519Signature2020 suits is identical. Therefore the already existing JavaScript implementation of the crypto library used in the Ed25519Signature2018 fork can be used here as well. This should make the implementation fairly straightforward and lightweight.

### Typings

One of the major reasons AFJ is implemented in TypeScript is because type definitions can help contributors and users understand how the code works. Therefore, every input parameter and return value **MUST** have a type definition. In other words: try to avoid using `any` as much as possible.

---

## Code examples

In the `/src` directory next to this document you'll find various code examples of how one might go about the implementation. The `/src/CredentialModule.ts` file is an interface that contains the envisioned methods that the module should have. However, the interface is purely there to provide an exemplar overview. The implementation itself doesn't have to implement an interface per se.

The `/src/interfaces.ts` file contains various examples of how one might structure the input parameters of the `CredentialModule` methods.

The `/docs/examples.md` file contains an example of how a call to one of the `CredentialModule` methods might look like. This example is there to show how a unified API might look like.

> :warning: **The code examples are not set in stone**: They're merely there to provide an example of the envisioned approach. Feel free to diverge from these examples as needed, taking the overall philosophy into account.
