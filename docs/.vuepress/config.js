module.exports = {
    title: '学习笔记',
    description: '记录学习',
    head: [
        ['link', { rel: 'icon', href: '/xw.png' }]
    ],
    themeConfig: {
      logo: '/xw.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '前端基础', link: '/base/html' },
        { text: '前端框架', link: '/frame/vue' },
        { text: '小程序', link: '/applet/base' },
        { text: '组件案例', link: '/example/form' },
        { text: '前端项目', link: '/project/shop' },
        { text: '面试', link: '/interview/base/' },
        { text: 'guihub', link: 'https://google.com' },
      ],
      sidebar: {
        '/base/': [
          'html', 
          'css' ,
          'js'
        ],
        '/frame/': [
          'vue',    
          'react', 
        ],
        '/applet/': [
          'base',    
          'uniapp', 
          ],
        '/example/': [
          'form',    
        ],
        '/project/': [
          'shop',    
        ],
        '/interview/': [
          'html',
          'css',
          'js',
          'vue',
          'base',
          'coding' 
        ],
        '/': [
            '/'
        ],
      }
    }
}