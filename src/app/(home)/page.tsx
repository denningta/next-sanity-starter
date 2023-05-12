import { draftMode } from 'next/headers'
import { cache } from 'react'
import { DocumentsCount, query } from '@/components/DocumentsCount'
import PreviewSuspense from '@/components/PreviewSuspense'
import { client } from '@/lib/sanity.client'
import PreviewDocumentsCount from '@/components/PreviewDocumentsCount'

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client))

interface IndexPageParams {
  params: {
    slug: string
  }
}

export default async function IndexPage({ params }: IndexPageParams) {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return (
      <PreviewDocumentsCount />
    )
  }

  const data = await clientFetch(query)
  return <DocumentsCount data={data} />
}



