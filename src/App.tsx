import './App.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './components'
import Main from './pages/main'
import Error from './pages/error/Error'
import Application from './pages/application/Application'

// TODO: promeniti ruter po dogovoru za formu
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path='/' element={<Main />} >
        <Route path='/prijava' element={<Application />} />
      </Route>
    </Route>
  )
)

const App = () => <RouterProvider router={router} />

export default App
