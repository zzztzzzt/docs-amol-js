import DefaultTheme from 'vitepress/theme'
import './custom.css'

import type { App } from 'vue'
import type { SiteData } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, siteData }: { app: App; siteData: SiteData }) {}
}