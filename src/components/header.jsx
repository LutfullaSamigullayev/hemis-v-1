import { Link } from "react-router-dom";
import { Icons } from "../components";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Courses", link: "#courses" },
    { id: 4, title: "Contact", link: "#footer" },
    { id: 5, title: "Log In", link: "/login" },
    { id: 6, title: "Sign Up", link: "/signUp" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header ${isOpen ? "open" : ""}`}>
      <div className="container">
        <div className="header_wrapper">
          <Link to="/" className="logo">
            <img src="/header/logo.png" alt="logo" />
          </Link>
          <ul className="menu">
            {menuItem.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="menu_item">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header_rigth">
            <Link to="/cabinet/home" className="signup">
              <Icons.personWhite />
            </Link>
            <button className="menu_button" onClick={toggleMenu}>
              {isOpen ? <Icons.cancel /> : <Icons.burger />}
            </button>
          </div>
        </div>
        <div className={`menu_wrapper ${isOpen ? "open" : ""}`}>
          <ul className="menu_hidden">
            {menuItem.map((item) => (
              <li key={item.link}>
                <Link to={item.link} className="menu_item">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
