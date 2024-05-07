import { Link } from "react-router-dom";
import { Icons } from "../components";

export function Header() {
  const menuItem = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "#" },
    { id: 3, title: "Courses", link: "#" },
    { id: 4, title: "Contact", link: "#" },
    { id: 5, title: "Log In", link: "#" },
    { id: 6, title: "Sign Un", link: "#" },
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
              <li>
                <Link className="menu_item" to={item.link}>
                  {item.title}
                </Link>
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
