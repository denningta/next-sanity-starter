import PreviewSuspense from "@/components/PreviewSuspense"
import NavBar, { getNavData, navDataQuery } from "@/components/ui/NavBar"
import NavBarPreview from "@/components/ui/NavBarPreview"
import { clientFetch } from "@/lib/sanity.client"
import { draftMode } from "next/headers"

interface HomeLayoutProps {
  children: React.ReactNode
}


export default async function HomeLayout({ children }: HomeLayoutProps) {
  const { isEnabled } = draftMode()

  const navData = await clientFetch(navDataQuery)

  return (

    <PreviewSuspense fallback="Loading...">
      <div className="flex flex-col mx-auto px-4 sm:px-0 min-h-screen">
        {/* @ts-expect-error Async Server Component */}
        {!isEnabled && <NavBar data={navData} />}
        {isEnabled && <NavBarPreview />}

        <section className="max-w-xl w-full mx-auto">
          {children}
        </section>
      </div>
      {isEnabled &&
        <div className="fixed bottom-0 right-0 bg-cyan-800">
          Exit Preview
        </div>
      }
    </PreviewSuspense>
  )
}
