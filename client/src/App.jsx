import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Login from './pages/login/Login';

import Register from './pages/register/Register';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';

function App() {
  // const Layout = () => {
  //   return (
  //     <div>
  //       <NavBar />
  //       <div style={{ display: 'flex' }}>
  //         <LeftBar />
  //         <Outlet />
  //         <RightBar />
  //       </div>
  //     </div>
  //   );
  // };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/profile/:id',
          element: <Profile />,
        },
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
