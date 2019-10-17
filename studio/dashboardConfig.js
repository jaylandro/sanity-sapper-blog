export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5da8c15e4b048c0187c11214',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-z2qpmijm',
                  apiId: '1bcc1ccc-7d45-4551-8b18-5257529d0fa8'
                },
                {
                  buildHookId: '5da8c15eceaf55018d1e7308',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-n327ocnt',
                  apiId: '259786f3-07c2-4fa8-b0fa-ddd347b8c943'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaylandro/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-n327ocnt.netlify.com', category: 'apps'}
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
