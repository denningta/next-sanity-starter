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
  ],
})
