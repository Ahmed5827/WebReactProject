import React from "react";
export default function NavBarItem({ _key, isScrolled, item }) {
  return (
    <a
      key={_key}
      className={isScrolled ? "isScrolledText" : "notScrolledText"}
      href={item.path}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {item.name}{" "}
    </a>
  );
}
