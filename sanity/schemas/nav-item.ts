import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'route',
      title: 'Link to Page',
      type: 'reference',
      to: [{ type: 'page' }]
    })
  ],
})
