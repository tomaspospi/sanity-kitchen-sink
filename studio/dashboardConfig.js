export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6013d57441a0d7cd602e0197',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ozd9gjjv',
                  apiId: 'deb0be2e-8da4-4966-b345-51cc1e94aec3'
                },
                {
                  buildHookId: '6013d574916696b278e956e6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-egsibazj',
                  apiId: '8ff88c99-8857-4f72-93b1-d6ed4419ebaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomaspospi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-egsibazj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
