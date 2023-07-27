import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/login/Login';

import Register from './pages/register/Register';

import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/profile/:id',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: '/',
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
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
