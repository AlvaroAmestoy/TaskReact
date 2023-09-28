import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import GetUsers from './Pages/Users/GetUsers.tsx'
import './index.css'
import GetUsersNation from './Pages/Users/GetUsersNation.tsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/users",
    element:<GetUsers/>
  },
  {
    path:"/users/:nation",
    element:<GetUsersNation/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
