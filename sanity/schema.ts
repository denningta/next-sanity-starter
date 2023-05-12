import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import page from './schemas/page'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    settings,
    page,
    post,
    author,
    category,
    blockContent,
  ],
}
