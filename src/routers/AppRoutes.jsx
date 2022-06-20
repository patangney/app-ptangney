import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'


export const appPages = [
  { path: '/', element:<Home />},
  { path: 'page404', element:<NotFound /> }
]

const AppRoutes = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        {appPages.map(({ element, path }) => {
          return (
            <Route key={path} element={element} path={path} />
          )
        })}
      </Routes>
    </Router>
  )
}

export default AppRoutes
