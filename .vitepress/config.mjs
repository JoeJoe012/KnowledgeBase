import { defineConfig } from 'vitepress'
import { set_sidebar } from './util/auto-gen-sidebar.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/knowledge-base/',
  head: [["link", { rel: "icon", href: "/knowledge-base/github-fill.svg" }]],
  title: "Project",
  description: "A VitePress Site",
  themeConfig: {
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle: 'Table of Contents',
    outline: [1, 6],
    logo: "/earth-icon.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', 
        items: [
          { text: '首页', link: '/'},
          { text: 'Example', link: '/markdown-examples'}
        ] 
      },
      { text: 'Frontend', link: '/front-end/测试index' },
      { text: 'Backend', link: '/front-end/测试index'},
      { text: 'DevOps', 
        items: [
          { text: 'Linux', link: '/markdown-examples'},
          { text: 'MySQL', link: '/markdown-examples'},
          { text: 'Nginx', link: '/markdown-examples'}
        ]
      },
      { text: 'Subject',
        items: [
          { 
            text: 'English',
            items: [
              { text: 'English Grammar', link: '/subject/english/english-grammar'},
              { text: 'Intensive Reading', link: '/subject/english/english-grammar-system'}
            ]
          }
        ]
      },
      { text: 'Other', 
        items: [
          { text: 'Git', link: '/markdown-examples'}
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // 自动生成侧边导航栏
    // sidebar: { "/front-end": set_sidebar("/front-end") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      }
    },

    // 底部配置
    footer: {
      copyright: 'Copyright@ 2025'
    }
  }
})
