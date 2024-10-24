import { Link } from "react-router-dom";
import { Icons, Button } from "../components";
import { users } from "../data/users";
import { useState } from "react";

export function Login() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function checkUser(e) {
    e.preventDefault();

    const email = e.target.querySelector("#email").value;
    const password = e.target.querySelector("#password").value;

    const user = users.find((user) => user.email == email);

    if (!user) {
      setError(true);
    } else {
      if (user.password != password) {
        setError(true);
      } else {
        setSuccess(true);
      }
    }
  }

  return (
    <div className="register login">
      <Link to="/" className="logo absolute">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <div className="register__wrapper">
        <h1>Login</h1>

        {success && (
          <>
            <h1>Success</h1>
          </>
        )}

        {error && (
          <>
            <h1>Error</h1>
          </>
        )}

        <form id="form" className="register__form" onSubmit={checkUser}>
          <label htmlFor="username">Username</label>
          <div className="input">
            <div className="svg">
              <Icons.login />
            </div>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              required
            />
          </div>
          <label htmlFor="username">Email</label>
          <div className="input">
            <div className="svg">
              <Icons.password />
            </div>
            <input
              type="text"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              required
            />
          </div>
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
