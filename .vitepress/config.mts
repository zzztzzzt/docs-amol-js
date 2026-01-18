import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amol-JS",
  description: "Instantly Build Beautiful Web 3D Interaction.",
  head: [
    ['link', { rel: 'icon', href: '/logo/logo-2.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo/logo-2.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Usage', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzztzzzt/Amol-JS' },
      { icon: 'huggingface', link: 'https://github.com/zzztzzzt/Amol-JS' },
      { icon: 'x', link: 'https://github.com/zzztzzzt/Amol-JS' }
    ]
  }
})
