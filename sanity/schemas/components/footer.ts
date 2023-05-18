import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string'
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItemGroup',
          fields: [
            {
              name: 'group',
              type: 'string',
            },
            {
              name: 'navItems',
              type: 'array',
              of: [{
                type: 'reference',
                to: [{ type: 'navItem' }]
              }]
            }
          ]
        }
      ]
    }),
  ]

})
