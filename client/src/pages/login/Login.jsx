import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello worlds</h1>
          <p>
            Lorem odit nemo tempore asperiores, dolorum id, aliquam at? Nostrum?
          </p>
          <span>dont you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
