import { Outlet } from 'react-router-dom';
import LeftBar from '../leftbar/LeftBar';
import NavBar from '../navbar/NavBar';
import RightBar from '../rightbar/RightBar';

export default function Layout() {
  return (
    <div className="theme-dark">
      <NavBar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}
