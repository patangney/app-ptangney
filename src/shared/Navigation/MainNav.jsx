import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import AvatarDropdown from '../Avatar/AvatarDropdown'
import MenuBar from './MenuBar'

const MainNav = ({ isTop }) => {
  return (
    <>
      <div
        className={`nc-MainNav1 nc-MainNav2 relative z-10 ${
          isTop ? 'onTop ' : 'notOnTop backdrop-filter'
        }`}
      >
        <div className='container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8'>
          <div className='flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10'>
            {/* <Logo /> */}
            <div className='hidden sm:block h-10 border-l border-neutral-300 dark:border-neutral-500'></div>
            <div className='hidden sm:block'>
              <Dropdown />
            </div>
          </div>
          <div className='flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1'>
            <div className='hidden items-center xl:flex space-x-1'>
              {/* <CurrencyDropdown />
            <LangDropdown /> */}
              <Link
                to={'/'}
                className='text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
              >
                List your property
              </Link>

              <div></div>
              {/* <SwitchDarkMode />
            <NotifyDropdown /> */}
              <div></div>
              <AvatarDropdown />
            </div>
            <div className='flex items-center space-x-4 xl:hidden'>
              {/* <NotifyDropdown /> */}
              {/* <AvatarDropdown /> */}
            <MenuBar /> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainNav
