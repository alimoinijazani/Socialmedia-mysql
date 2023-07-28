import { Navigate } from 'react-router-dom';

const currentUser = true;
export default function ProtectedRoute({ children }) {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}
