import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import page from './schemas/page'
import settings from './schemas/settings'
import navItem from './schemas/nav-item'
import rootPage from './schemas/root-page'
import hero from './schemas/components/hero'
import callToAction from './schemas/components/call-to-action'
import testimonial from './schemas/components/testimonial'
import testimonialSection from './schemas/components/testimonialSection'
import feature from './schemas/components/feature'
import footer from './schemas/components/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    settings,
    page,
    post,
    author,
    category,
    blockContent,
    navItem,
    rootPage,
    hero,
    callToAction,
    testimonial,
    testimonialSection,
    feature,
    footer,
  ],
}
