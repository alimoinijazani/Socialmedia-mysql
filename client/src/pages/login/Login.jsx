import './login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello worlds</h1>
          <p>
            Lorem odit nemo tempore asperiores, dolorum id, aliquam at? Nostrum?
          </p>
          <span>dont you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
