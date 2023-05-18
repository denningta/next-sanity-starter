/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { defaultDocumentNode } from './sanity/desk-tool/defaultDocumentNode'
import deskStructure from './sanity/desk-tool/deskStructure'
import { noteField } from 'sanity-plugin-note-field'
import SlugExample from './sanity/custom-components/SlugExample'
import { colorInput } from '@sanity/color-input'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: deskStructure
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    noteField(),
    colorInput(),
  ],
  form: {
    components: {
      field: (props) => {
        if (props.name === 'slug') return SlugExample(props)
        return props.renderDefault(props)
      }
    }
  }
})
