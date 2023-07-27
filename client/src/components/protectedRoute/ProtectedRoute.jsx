import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const currentUser = true;
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
