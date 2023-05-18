import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string'
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'blockContent'
    }),
    defineField({
      name: 'callToAction',
      title: 'Call To Action',
      type: 'reference',
      to: [{ type: 'callToAction' }]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'headlinImage',
      title: 'Headline Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
  ]

})
