import { useLocation, useNavigate } from "react-router-dom";

const menus = [
  { name: "HOME", path: "/" },
  { name: "MEALS", path: "/meals" },
  { name: "CONTACT US", scrollTo: "contact-us" },
  { name: "SUBSCRIPTION", path: "/subscription" },
  { name: "LOGIN", path: "/login" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function isActive(menu) {
    if (menu.name === "HOME" && location.pathname === "/") return true;
    if (menu.name === "MEALS" && location.pathname.startsWith("/meals")) return true;
    if (menu.path && location.pathname === menu.path) return true;
    return false;
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#254423] px-8 py-3 rounded-b-2xl shadow-lg flex items-center justify-center" style={{ minHeight: 74 }}>
      <ul className="flex w-full max-w-5xl justify-between items-center">
        {menus.map((menu) => (
          <li key={menu.name}>
            {/* Tombol HOME dengan logic scroll/navigate */}
            {menu.name === "HOME" ? (
              <button
                onClick={() => {
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate("/");
                  }
                }}
                className={`
                  ${isActive(menu)
                    ? "bg-[#F6EEDC] text-[#254423] rounded-full px-6 py-2 shadow"
                    : "text-[#F6EEDC] hover:text-[#FFF9E5] px-4 py-2"}
                  font-bold text-[17px] font-['Inter'] tracking-widest transition-all duration-300
                  focus:outline-none hover:text-[23px]
                `}
                style={{ letterSpacing: "0.13em" }}
              >
                {menu.name}
              </button>
            ) : menu.scrollTo ? (
              <a
                href={`#${menu.scrollTo}`}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById(menu.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-bold text-[17px] font-['Inter'] tracking-widest px-4 py-2 rounded transition-all duration-300 focus:outline-none cursor-pointer
                  text-[#F6EEDC] hover:text-[23px] hover:text-[#FFF9E5]`}
                style={{ letterSpacing: "0.13em" }}
              >
                {menu.name}
              </a>
            ) : (
              <button
                onClick={() => navigate(menu.path)}
                className={`
                  ${isActive(menu)
                    ? "bg-[#F6EEDC] text-[#254423] rounded-full px-6 py-2 shadow"
                    : "text-[#F6EEDC] hover:text-[#FFF9E5] px-4 py-2"}
                  font-bold text-[17px] font-['Inter'] tracking-widest transition-all duration-300
                  focus:outline-none hover:text-[23px]
                `}
                style={{ letterSpacing: "0.13em" }}
              >
                {menu.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
