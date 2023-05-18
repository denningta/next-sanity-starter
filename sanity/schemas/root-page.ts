import { defineType, defineField } from 'sanity'
import page from './page'
import { GiInfo } from 'react-icons/gi'

export default defineType({
  name: 'rootPage',
  title: 'Root Landing Page',
  type: 'document',
  fields: [

    defineField({
      title: 'Root Landing Page',
      description: 'This is the page users will see when visiting the root of your domain name (Ex: https://www.example.com)',
      name: 'rootNote',
      type: 'note',
      options: {
        icon: GiInfo,
        tone: 'positive'
      }

    }),
    ...page.fields
      .filter(field => field.name !== 'slug')

  ]
}) 
