import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './main.css'

import {Home, RootLayout, Details, Category, AuthPage, ContactUs, Courses} from './pages';


const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {index:true, element:<Home /> },
      {path:'home', element:<Home />},
      {path:'contact', element:<ContactUs />},
      {path:'courses', element:<Courses />},
      {path:'details/:id', element:<Details />},
      {path:'category/:category', element:<Category />},
    ]
  },
  {
    path:'auth', 
    element: <AuthPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);