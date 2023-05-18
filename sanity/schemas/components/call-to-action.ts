import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string'
    }),
    defineField({
      name: 'pageLink',
      title: 'Link to Page',
      type: 'reference',
      to: [{ type: 'page' }]
    }),
  ]
})
