import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home, RootLayout} from './pages';
import './main.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Details from './pages/Details';
import Category from './pages/Category';
import AuthPage from './pages/AuthPage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {index:true, element:<Home /> },
      {path:'home', element:<Home />},
      {path:'details/:id', element:<Details />},
      {path:':category', element:<Category />}
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