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
                  buildHookId: '5f613dded6bec473ab9d6f0a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4n8vhqo2',
                  apiId: 'e73a5a29-a6fc-4434-82ea-a047eff7bcda'
                },
                {
                  buildHookId: '5f613dde8862156e9fc3a9ea',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uc4xr5r4',
                  apiId: 'e67f924d-48ea-4a13-acde-a9593bc193c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TouhouProjectis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uc4xr5r4.netlify.app', category: 'apps'}
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
