import PreviewSuspense from "@/components/PreviewSuspense"
import NavBar from "@/components/ui/NavBar"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {

  return (

    <PreviewSuspense fallback="Loading...">
      <div className="flex flex-col mx-auto px-4 sm:px-0 min-h-screen">
        {/* @ts-expect-error Async Server Component */}
        <NavBar />

        <section className="max-w-xl w-full mx-auto">
          {children}
        </section>
      </div>
    </PreviewSuspense>
  )
}
