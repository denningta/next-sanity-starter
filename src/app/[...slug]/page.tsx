import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

interface PageProps {
  params: {
    slug: string
  }
}

const pageSlugsQuery = groq`
  *[_type == 'page']{ 
    "slug": [slug.current]
  }
`

export const dynamic = 'error'

export async function generateStaticParams() {
  const pageSlugs = client.fetch(pageSlugsQuery)
  return pageSlugs
}

export default function Page({ params }: PageProps) {
  const { slug } = params
  return <div>My Page: {slug}</div>
}
