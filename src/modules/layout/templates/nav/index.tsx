import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"

import { themeChange } from 'theme-change'


const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  //useEffect that detects if window is scrolled > 5px on the Y axis
 

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        style={{
          background: "#ffffffa6",
          backdropFilter: 'blur(8px)',
          position: "absolute",
          width: "100%"

        }}
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent"
          // {
            // "!bg-white !border-gray-200": !isHome || isScrolled,
          // }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
          
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
          <div className="mr-8">
	
	<select data-choose-theme className="chooseTheme focus:outline-none h-10 rounded-full px-3 border">
		<option value="">Default</option>
		<option value="dark">Dark</option>
		<option value="black">Black</option>
		<option value="valentine">Pink</option>
		<option value="aqua">Blue</option>
		<option value="🐤">Yellow</option>
	</select>
</div>
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <DropdownMenu  />
            </div>
          


         
          </div>
        
	



    

          <div  className="flex items-center h-full">
            <Link href="/">
            <Image
            src="/snoopermarket.png"
            alt=""
            
                width="400px"
                height="50px"
            className="absolute "
          />
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
