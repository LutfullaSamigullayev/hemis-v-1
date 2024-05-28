import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback } from "react";

export function Nav() {
  const menuItem = [
    { title: "Home", link: "/cabinet/home", key: "home" },
    { title: "Student", link: "/cabinet/student", key: "student" },
    { title: "Module", link: "/cabinet/module", key: "module" },
    { title: "Timetable", link: "/cabinet/timetable", key: "timetable" },
    { title: "Statistic", link: "/cabinet/statistic", key: "statistic" },
    { title: "Student Card", link: "/cabinet/student/card", key: "card" },
    { title: "Events", link: "/cabinet/events", key: "events" },
  ];

  const currentPath = useLocation().pathname.split("/").pop();

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src="/header/logo.png" alt="logo" />
      </Link>
      <ul className="nav__menu active">
        {menuItem.map((item) => (
          <Link className="menu_item" to={item.link}>
            <li
              key={item.key}
              className={currentPath == item.key ? "active" : ""}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <Link to="/" className="singout">
        Sign Out
      </Link>
    </div>
  );
}
