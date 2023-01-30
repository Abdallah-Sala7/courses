import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home, RootLayout} from './pages';
import './main.css'


const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {index:true, element:<Home /> },
      {path:'home', element:<Home />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);