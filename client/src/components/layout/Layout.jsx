import { Outlet } from 'react-router-dom';
import LeftBar from '../leftbar/LeftBar';
import NavBar from '../navbar/NavBar';
import RightBar from '../rightbar/RightBar';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
}
