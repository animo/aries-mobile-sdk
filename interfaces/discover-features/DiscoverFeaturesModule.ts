import { DiscloseFeaturesConfig, QueryFeaturesConfig } from './interfaces'

interface DiscoverFeaturesModule {
  queryFeatures(connectionId: string, options: QueryFeaturesConfig): Promise<void>
  discloseFeatures(connectionId: string, options: DiscloseFeaturesConfig): Promise<void>
}

export { DiscoverFeaturesModule }
