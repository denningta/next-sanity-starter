import urlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from 'next-sanity'
import { cache } from 'react'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-01-01"

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true })


export const clientFetch = cache(client.fetch.bind(client))

const builder = urlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)

}
