export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'kongsvik-dev-studio',
                  apiId: '9b428c45-37c9-41f9-a7d0-fdcb33934d6b'
                },
                {
                  buildHookId: '62b60e9668a6bb009b0740b6',
                  title: 'Events Website',
                  name: 'kongsvik-dev',
                  apiId: '27abfca4-138b-434a-8bbb-0aa4956ab16d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tokongs/kongsvik.dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kongsvik-dev.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
