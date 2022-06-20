import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import MainNav from '../../shared/Navigation/MainNav'

const Header = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }
  })

  function scrollFunction () {
    const $head = document.getElementById('app-header')
    if (!$head) return
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      !!isTop && setIsTop(false)
    } else {
      setIsTop(true)
    }
  }

  /** @TODO Admin Panel for Helmet (SEO) - this will need to use <Child> https://github.com/nfl/react-helmet*/
  const SEO =
    'Flesk River Apartments || get your apartment stay in Killarney this year '
  const year = new Date().getFullYear()
  return (
    <>
      <div
        id='app-header'
        className='nc-Header lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40'
      >
        <HelmetProvider>
          <Helmet>
            ( <title>{SEO + year}</title> )
          </Helmet>
        </HelmetProvider>

        {/* NAV */}
        <MainNav isTop={isTop} />        
      </div>
    </>
  )
}

export default Header
