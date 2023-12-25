import logo from "/assets/logo.png";

function Navbar() {
  return (
    <div class="navbar bg-[#2A2B47] p-4 py-6 rounded-3xl mt-3 shadow-lg flex justify-between">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Nos Experts</a>
            </li>
            <li>
              <a>Contactez-nous</a>
            </li>
          </ul>
        </div>
        <div class="absolute ml-0 left-1/2 transform -translate-x-1/2 lg:ml-28 lg:relative lg:left-auto lg:transform-none">
          <a class="text-xl">
            <img src={logo} alt="logo" className="w-16" />
          </a>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul
          id="navbar-ul"
          class="menu menu-horizontal mr-28 text-white font-semibold text-xxs"
        >
          <li className="hover:text-gray-300">
            <a>SERVICES</a>
          </li>
          <li className="hover:text-gray-300">
            <a>NEWS</a>
          </li>
          <li className="hover:text-gray-300">
            <a>ABOUT</a>
          </li>
          <li className="hover:text-gray-300">
            <a>NOS EXPERTS</a>
          </li>
          <li className="hover:text-gray-300">
            <a>CONTACTEZ-NOUS</a>
          </li>
        </ul>
      </div>
    </div>
    // <div className="">
    //   <div className="flex justify-between items-center w-full">
    //     <img src={logo} alt="logo" className="w-16 ml-24" />
    //     <ul id="navbar-ul" className="flex mr-20 text-white font-semibold text-xxs">
    //       <li className="mr-4">
    //         <a className="" href="#">SERVICES</a>
    //       </li>
    //       <li className="mr-4">
    //         <a href="#">NEWS</a>
    //       </li>
    //       <li className="mr-4">
    //         <a href="#">ABOUT</a>
    //       </li>
    //       <li className="mr-4">
    //         <a href="#">NOS EXPERTS</a>
    //       </li>
    //       <li className="mr-4">
    //         <a href="#">CONTACTEZ-NOUS</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Navbar;
