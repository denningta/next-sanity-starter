import { defineField, defineType } from "sanity";

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string'
    }),
    defineField({
      name: 'icon',
      title: 'Brand Icon',
      description: 'The brand icon for the site',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ]
})
