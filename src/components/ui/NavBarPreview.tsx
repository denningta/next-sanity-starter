'use client'

import { usePreview } from "@/lib/sanity.preview"
import NavBar, { navDataQuery } from "./NavBar"

export default function NavBarPreview() {
  const data = usePreview(null, navDataQuery)
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <NavBar data={data} />
    </>
  )
}
