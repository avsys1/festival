import { Link } from "react-router-dom";
import "../../App.css";
export function OverlayMenu({ isOpen, setIsOpen }) {
  if (!isOpen)
    return (
      <button
        className="navbar-menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        MENU
      </button>
    );

  return (
    <div className="popup-menu">
      <div className="flex flex-col space-y-4 px-4 py-4 ">
        <Link
          to="/"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          Ho<span className="--rotated hover:text-white ">m</span>e
        </Link>
        <Link
          to="/lineup"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          L<span className="--rotated hover:text-white ">i</span>neup
        </Link>
        <Link
          to="https://tickets.drevjeno.cz"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          Ticke<span className="--rotated hover:text-white ">t</span>s
        </Link>
        <Link
          to="/info"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          In<span className="--rotated hover:text-white ">f</span>o
        </Link>
        <Link
          to="https://t.me/+sLPjGaYpe045Yjg0"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          Tele<span className="--rotated hover:text-white ">g</span>ram
        </Link>
        <Link
          to="https://discord.gg/NThqMbWQvT"
          className="hover:text-white popup-menu__link"
          onClick={() => setIsOpen(false)}
        >
          Disc<span className="--rotated hover:text-white ">o</span>rd
        </Link>
      </div>
    </div>
  );
}
