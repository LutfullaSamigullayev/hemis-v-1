import { Link } from "react-router-dom";
import { Icons, Button } from "../components";
export function Login() {
  return (
    <div className="register login">
      <Link to="/" className="logo absolute">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <div className="register__wrapper">
        <h1>REGISTER</h1>
        <form action="" id="form" className="register__form">
          <label htmlFor="username">Username</label>
          <div className="input">
            <div className="svg">
              <Icons.login />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="Username"
              id="Username"
              required
            />
          </div>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="Username"
            id="Username"
            required
          />
          <div className="submit">
            <Link to="/signUp">New Account ??</Link>
            <Button>LOGIN</Button>
          </div>
          <div className="register__icons">
            <div>
              <Icons.google />
            </div>
            <div>
              <Icons.apple />
            </div>
            <div>
              <Icons.facebook2 />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
