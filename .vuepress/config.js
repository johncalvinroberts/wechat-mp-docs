module.exports = {
  title: 'WeChat Mini Programs',
  description: 'The official documentation from Tencent, updated and translated into English',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Framework', link: '/framework/' },
      { text: 'Components', link: '/components/' },
      { text: 'API', link: '/api/' },
      { text: 'Tools', link: '/tools/' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'getting-started',
        'file-structure',
        'framework',
        'pre-release',
        'publishing'
      ],
      '/': [
        '',
        '/guide/',
        '/framework/',
        '/components/',
        '/api/',
        '/tools/',
        'preview-to-mini-programs',
        'changelog'        
      ]
    }
  }
}