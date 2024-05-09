import { Link } from "react-router-dom";
import { Button, Icons } from "../components";
export function SignUp() {
  return (
    <div className="register signUp">
      <Link to="/" className="logo absolute">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <div className="register__wrapper">
        <h1>REGISTER</h1>
        <form action="" id="form" className="register__form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            name="Username"
            id="Username"
            required
          />
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="Username"
            id="Username"
            required
          />
          <label htmlFor="username">Phone</label>
          <input
            type="text"
            placeholder="Enter Your Phone number"
            name="Username"
            id="Username"
            required
          />
          <label htmlFor="username">Password</label>
          <input
            type="Password"
            placeholder="Enter Password"
            name="Username"
            id="Username"
            required
          />
          <div className="submit">
            <Link to="/login">Login ??</Link>
            <Button>REGISTER</Button>
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
