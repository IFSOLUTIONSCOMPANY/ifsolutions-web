import logo from "/assets/logo.png";

function Navbar() {
  return (
    <div className="navbar p-4 py-6 shadow-lg flex justify-between z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Nos Experts</a>
            </li>
            <li>
              <a href="#contact">Contactez-nous</a>
            </li>
          </ul>
        </div>
        <div className="absolute ml-0 left-1/2 transform -translate-x-1/2 lg:ml-28 lg:relative lg:left-auto lg:transform-none">
          <a className="text-xl">
            <img src={logo} alt="logo" className="w-16" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          id="navbar-ul"
          className="menu menu-horizontal mr-28 text-white font-semibold text-xxs"
        >
          <li className="hover:text-gray-300">
            <a href="#services">SERVICES</a>
          </li>
          <li className="hover:text-gray-300">
            <a>NEWS</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#team">NOS EXPERTS</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">CONTACTEZ-NOUS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
