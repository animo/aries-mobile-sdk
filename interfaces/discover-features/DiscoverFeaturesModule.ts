interface DiscoverFeaturesModule {
  queryFeatures(connectionId: string, options: { query: string; comment?: string })
}
