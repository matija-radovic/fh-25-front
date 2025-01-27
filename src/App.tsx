import './App.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout, Pocetna } from './components'
import Main from './pages/main'
import Test from './pages/test'

// TODO: promeniti ruter po dogovoru za formu
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Main />} />
      {
        //*
        
        <Route path='/test' element={<Test />} />
        //*/
      }
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
