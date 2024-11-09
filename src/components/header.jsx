import { Link } from "react-router-dom";
import { Icons } from "../components";

export function Header() {
  const menuItem = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Courses", link: "#courses" },
    // { id: 4, title: "Prize", link: "#prize" },
    { id: 5, title: "Contact", link: "#footer" },
    { id: 6, title: "Log In", link: "/login" },
    { id: 7, title: "Sign Up", link: "/signUp" },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header_wrapper">
          <Link to="/" className="logo">
            <img src="/header/logo.png" alt="logo" />
          </Link>
          <ul className="menu">
            {menuItem.map((item) => (
              <li key={item.id}>
                <a className="menu_item" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/cabinet/home" className="signup">
            <Icons.personWhite />
          </Link>
        </div>
      </div>
    </div>
  );
}
