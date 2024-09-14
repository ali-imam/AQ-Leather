import React from "react";
// import Logo from "./public/logo.png";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img src="logo.png" className="w-12" alt="ochi logo" />
        </div>
        <div className="links items-center gap-10 hidden md:flex">
          {navLinks.map((item, index) => (
            <a
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`text-md font-light capitalize whitespace-nowrap cursor-pointer ${
                index === 4 && "ml-[10vw]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <LuMenu className="md:hidden block text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
