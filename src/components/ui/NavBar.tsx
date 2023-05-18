import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity.client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import post from '../../../sanity/schemas/post'

export interface NavBarProps {
  data?: NavData
  height?: number
}

export interface NavData {
  title?: string
  icon?: SanityImageSource
}

export const navDataQuery = `
    *[_type == 'settings']{
      title,
      icon
    }[0]
  `

export async function getNavData() {
  const navData: NavData = await client.fetch(navDataQuery)
  return navData
}

const NavBar = async ({
  data,
  height = 70
}: NavBarProps) => {
  const { title, icon } = data ?? {}
  console.log(icon)

  return (
    <div className='flex justify-center'>
      <div
        className={`
                max-w-3xl
                flex items-center w-full py-2 
                transition ease-in-out
            `}
        style={{ height: height }}
      >
        <Link href="/" >
          <div className="flex items-center mx-2">
            <div className="relative w-[70px] h-[70px] overflow-hidden flex items-center mx-2">
              {icon &&
                <Image
                  src={urlFor(icon).height(800).width(800).url()}
                  alt={'logo'}
                  fill={true}
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
              }
            </div>
            <div className="font-semibold text-xl">
              {title &&
                <div>
                  {title}
                </div>
              }
              {!title &&
                <div className='border border-red-400 border-opacity-50'>
                  Site Title
                </div>
              }
            </div>
          </div>
        </Link>
        <div className="hidden grow sm:flex mx-6">
          navitems
        </div>

        <div className="static grow sm:hidden flex items-center justify-end mr-4">
          menu
        </div >

      </div >
    </div>
  )
}

export default NavBar
