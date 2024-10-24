import { Link } from "react-router-dom";
import { Button, Icons } from "../components";
import { users } from "../data/users";
import { useState } from "react";

export function SignUp() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function addUser(e) {
    e.preventDefault();

    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const phone = e.target.querySelector("#phone").value;
    const password = e.target.querySelector("#password").value;

    const user = users.find((user) => user.username == username);

    if (user) {
      setError(true);
    } else {
      users.push({
        username,
        email,
        password,
        phone,
      });

      setSuccess(true);
    }

    console.log(users);
  }

  return (
    <div className="register signUp">
      <Link to="/" className="logo absolute">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <div className="register__wrapper">
        <h1>Sign Up</h1>
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
        <form id="form" className="register__form" onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            id="username"
            required
          />
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="username">Phone</label>
          <input
            type="text"
            placeholder="Enter Your Phone number"
            name="phone"
            id="phone"
            required
          />
          <label htmlFor="username">Password</label>
          <input
            type="Password"
            placeholder="Enter Password"
            name="password"
            id="password"
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
