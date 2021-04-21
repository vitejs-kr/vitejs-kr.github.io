// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Vite',
  lang: 'ko',
  description: '차세대 프런트엔드 개발 및 빌드 툴',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'Gumball12/vitejs-ko',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '이 페이지 수정하기',

    algolia: {
      apiKey: 'f710f043c25b9358f3bf357b1efe7e8f',
      indexName: 'vitejs-ko'
    },

    carbonAds: {
      carbon: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    nav: [
      { text: '가이드', link: '/guide/' },
      { text: '설정', link: '/config/' },
      { text: '플러그인', link: '/plugins/' },
      {
        text: '관련 링크',
        items: [
          {
            text: '트위터',
            link: 'https://twitter.com/vite_js'
          },
          {
            text: '디스코드',
            link: 'https://chat.vitejs.dev'
          },
          {
            text: 'Awesome Vite',
            link: 'https://github.com/vitejs/awesome-vite'
          },
          {
            text: '개발 커뮤니티',
            link: 'https://dev.to/t/vite'
          },
          {
            text: '호환 가능한 Rollup 플러그인',
            link: 'https://vite-rollup-plugins.patak.dev/'
          },
          {
            text: '변경 사항',
            link:
              'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      '/config/': 'auto',
      '/plugins': 'auto',
      // catch-all fallback
      '/': [
        {
          text: '가이드',
          children: [
            {
              text: 'Vite를 사용해야 하는 이유',
              link: '/guide/why'
            },
            {
              text: '시작하기',
              link: '/guide/'
            },
            {
              text: '지원하는 기능들',
              link: '/guide/features'
            },
            {
              text: 'Dependency Pre-Bundling',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: 'Static Asset Handling',
              link: '/guide/assets'
            },
            {
              text: 'Building for Production',
              link: '/guide/build'
            },
            {
              text: 'Deploying a Static Site',
              link: '/guide/static-deploy'
            },
            {
              text: 'Env Variables and Modes',
              link: '/guide/env-and-mode'
            },
            {
              text: 'Server-Side Rendering (SSR)',
              link: '/guide/ssr'
            },
            {
              text: 'Backend Integration',
              link: '/guide/backend-integration'
            },
            {
              text: 'Comparisons',
              link: '/guide/comparisons'
            },
            {
              text: 'Migration from v1',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          children: [
            {
              text: '플러그인 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: 'Config Reference',
              link: '/config/'
            }
          ]
        }
      ]
    }
  }
}