import { definePreview } from "next-sanity/preview"
import { dataset, projectId } from "./sanity.client"

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

if (!projectId || !dataset) throw new Error(`Project ID or Dataset environment varialbles are undefined`)

export const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly })
