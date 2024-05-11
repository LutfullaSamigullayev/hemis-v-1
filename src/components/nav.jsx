import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";

export function Nav() {
  const menuItem = [
    { id: 1, title: "Home", link: "/cabinet/home" },
    { id: 2, title: "Student", link: "/cabinet/student" },
    { id: 3, title: "Module", link: "/cabinet/module" },
    { id: 4, title: "Timetable", link: "/cabinet/timetable" },
    { id: 5, title: "Statistic", link: "/cabinet/statistic" },
    { id: 6, title: "Student Card", link: "/cabinet/student/card" },
    { id: 7, title: "Events", link: "/cabinet/events" },
  ];

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <ul className="nav__menu">
        {menuItem.map((item) => (
          <li key={item.id}>
            <Link className="menu_item" to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className="singout">
        Sign Out
      </Link>
    </div>
  );
}
