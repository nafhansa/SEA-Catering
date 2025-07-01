import React from "react";

const menus = [
  { name: "HOME", isButton: true },
  { name: "MEALS" },
  { name: "CONTACT US" },
  { name: "SUBSCRIPTION" },
  { name: "LOGIN" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#254423] px-8 py-3 rounded-b-2xl shadow-lg flex items-center justify-center" style={{ minHeight: 74 }}>
      <ul className="flex w-full max-w-5xl justify-between items-center">
        {menus.map((menu) =>
          menu.isButton ? (
            <li key={menu.name}>
              <button
                onClick={() => {
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2 rounded-full bg-[#F6EEDC] text-[#254423] font-bold tracking-widest text-[17px] font-['Inter'] shadow 
                  focus:outline-none transition-all duration-300 hover:text-[23px] hover:scale-105"
                style={{ letterSpacing: "0.13em" }}
              >
                {menu.name}
              </button>
            </li>
          ) : (
            <li key={menu.name}>
              {menu.name === "CONTACT US" ? (
                <a
                  href="#contact-us"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#F6EEDC] font-bold text-[17px] font-['Inter'] tracking-widest px-4 py-2 rounded 
                    transition-all duration-300 hover:text-[23px] hover:text-[#FFF9E5] focus:outline-none cursor-pointer"
                  style={{ letterSpacing: "0.13em" }}
                >
                  {menu.name}
                </a>
              ) : (
                <a
                  href="#"
                  className="text-[#F6EEDC] font-bold text-[17px] font-['Inter'] tracking-widest px-4 py-2 rounded 
                    transition-all duration-300 hover:text-[23px] hover:text-[#FFF9E5] focus:outline-none"
                  style={{ letterSpacing: "0.13em" }}
                >
                  {menu.name}
                </a>
              )}
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
