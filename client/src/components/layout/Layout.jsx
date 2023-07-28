import { Outlet } from 'react-router-dom';
import LeftBar from '../leftbar/LeftBar';
import NavBar from '../navbar/NavBar';
import RightBar from '../rightbar/RightBar';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export default function Layout() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
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
