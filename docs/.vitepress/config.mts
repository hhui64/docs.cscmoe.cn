import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import timeline from 'vitepress-markdown-timeline'
import multimdTable from 'markdown-it-multimd-table'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,

  title: 'CSCMOE',
  description: '友爱和谐的菜市场小镇',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    outline: {
      label: '页面导航',
      level: 'deep'
    },

    search: {
      provider: 'local'
    },

    lastUpdatedText: '最后更新时间',

    nav: [
      { text: '游玩指南', link: '/guide/getting-started' },
      {
        text: '进阶教程',
        items: [
          { text: '生存技巧', link: '#' },
          { text: '模组玩法', link: '#' }
        ]
      },
      {
        text: '服务器信息',
        items: [
          { text: '模组列表', link: '/server-info/mod-list' },
          { text: '更新日志', link: '/server-info/changelog' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '游玩指南',
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '规章制度', link: '/guide/rules' },
            { text: '开始游玩', link: '/guide/getting-started' },
            { text: '常见问题与解决', link: '/guide/troubles' }
          ]
        }
      ],
      '/server-info/': [
        {
          text: '服务器信息',
          items: [
            { text: '模组列表', link: '/server-info/mod-list' },
            { text: '更新日志', link: '/server-info/changelog' }
          ]
        }
      ],
      '/modpack/': [
        {
          text: '整合包',
          items: [{ text: '官方整合包', link: '/modpack/official-modpack' }]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hhui64/docs.cscmoe.cn' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 CSCMOE GAMES'
    }
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(timeline)
      md.use(multimdTable, {
        multiline: true,
        rowspan: true,
        headerless: true,
        multibody: true,
        aotolabel: true
      })
    },
    image: {
      lazyLoading: true
    }
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
