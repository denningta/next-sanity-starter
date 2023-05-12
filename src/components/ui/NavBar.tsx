import { GiAstronautHelmet } from 'react-icons/gi'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'

export interface NavBarProps {
  darkModeButton?: JSX.Element
  height?: number
  isMenuOpen?: boolean
  onMenuToggle?: () => void
}

export interface NavData {
  title: string
}

export const navDataQuery = `
    *[_type == 'settings']{
      title
    }
  `

async function getNavData() {
  const navData: NavData = await client.fetch(navDataQuery)
  return navData
}

const NavBar = async ({
  darkModeButton,
  height = 70,
  isMenuOpen = false,
  onMenuToggle = () => { }
}: NavBarProps) => {

  const { title } = await getNavData()

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
            <div className="flex items-center mx-2">
              <GiAstronautHelmet size={20} />
            </div>
            <div className="font-semibold text-xl">
              {title &&
                <div>
                  {title}
                </div>
              }
              {!title &&
                <div>
                  Site Title
                </div>

              }

            </div>
          </div>
        </Link>
        <div className="hidden grow sm:flex mx-6">
          navitems
        </div>
        <div className="hidden sm:flex mr-4">
          {darkModeButton}
        </div>

        <div className="static grow sm:hidden flex items-center justify-end mr-4">
          menu
        </div >

      </div >
    </div>
  )
}

export default NavBar
