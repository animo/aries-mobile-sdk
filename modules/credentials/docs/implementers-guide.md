# Issue Credential Implementers Guide

This documents gives an overview of the envisioned architecture for the AIP 2.0 compliant `CredentialsModule`.

## Credential formats

One of the primary features of [issue-credential v2](https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md), is the introduction of new credential formats. In AFJ, we're only looking to add support for JSON-LD credentials for now.

## Current Architecture

![current-architecture](https://www.plantuml.com/plantuml/png/VP9BRiCm34JtF0MHJLQ-GX6WcmP8Dyq9L8brXCYYGL4jZ21thuquy2U2jvet96UWGr8Zcfi0aAu-jaPCWwsnLrFJMRj0A6JLn3hGd6Wuihq8DuGgkPUKMrJ6RrRb1fqVN9uZm3WBTv_iSZ_kP3gI7Tu0qGQJ4huBEOhgJNWGS9-PpYI_tcwwHcHIECR7yhLo8bUJh5-FqNKV75nPEQQK9sL-sXUrdBooT5lNJTHWteyb20KpN9XWdHwhwgqGheoz98Nzix3IXgTM1VhHeh_0Ygyl0xmihm0w_eizzrhdDhiik0JdHIEpGW4E55t_T_y1 'current-architecture')

## Envisioned Architecture

![envisioned-architecture](https://www.plantuml.com/plantuml/png/bPOzRzim48Pt_WeYYoODRVOWGOoYGPmb1fAkP-bY4vP8uKYrCDB-zv8GPP8IfIIRpNlkaoyFkjK6oFHjmvW-2Ta1GSixg4vmm9qvDyW9AmFoq604j4ggwaYgHMweHyQCwhXHVA-CKIslXNCIIZBcG_6h9rNtDjeMpaXN_9rnNZMWDRydh54Q0Sr0i7-HqmxfjwWIBzXhGr2PoD5J8QIISiW_jMonFY2Df_Quy8O7MPzVDiz9LRyk_vnrjtcC-3iIgE_q2MY88gH1UWDRgcD_ggOEQT8iDiwIUNS4ctOhzWGkV8hbyZnetQ_aMJ9FygHOvcAywUNRYksxSmpL1U27eXPCCih9qLR84zORCE0DIQGmpzdnK7Ye-FNw_j95hA9dx9GMHj5vJNw1Siw5rojX0qv9cas5oilo9YF2F3PJ92j6RUSoZBQomJUJzS-m90v71wSYBtW6hTKVQScvLZ-Y9rfX6P7mik_Al-kZkQXc6Svrs2SJZowC1LcDSqY2Uc5DbURdcqFpdKMJy5osfwzXS_t7tSokQiawleRm-s8Ujbd6C2wsp6Gy4R-fOYuOorbeTN4jUcMtOR4QB3YwPVrPTcZ_CtIyrdtXYUAJmjEti4YlRjjYrVn1kmliGhiPEccNiLkKjVqI-0y0 'envisioned-architecture')

### Credential formats

One of the main features of `issue-credential v2` is the support for multiple credential formats. Therefore, on top of the already supported Indy credential format, we will add support for JSON-LD credentials in AFJ. However, in order to allow support for other formats to be added later on, we need a mechanism to do so.

<!-- TODO -->

### Credential services

In order to add support for `issue-credential v2`, changes to the `CredentialService` class have to be made. The following structure is a possible approach:

```puml
@startuml

skinparam monochrome true

abstract class CredentialService

V1CredentialService -up-|> CredentialService
V2CredentialService -up-|> CredentialService

@enduml
```

#### CredentialService

The _abstract_ `CredentialService` class is where overlapping functionality of `v1` and `v2` is implemented. This is mainly functionality related to the **indy credential format**.

#### CredentialServiceV1

This is where all `v1` specific functionality is implemented.

#### CredentialServiceV2

This is where all `v2` specific functionality is implemented. This service also needs a **mechanism** to add support for other formats later on.

<!-- Service versions = mapping -->
<!-- TODO CredentialRecord  -->
<!-- TODO Credential  -->
