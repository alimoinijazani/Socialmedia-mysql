import { Link } from 'react-router-dom';
import './register.scss';

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Family Social</h1>
          <p>
            Lorem odit nemo tempore asperiores, dolorum id, aliquam at? Nostrum?
          </p>
          <span>do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
