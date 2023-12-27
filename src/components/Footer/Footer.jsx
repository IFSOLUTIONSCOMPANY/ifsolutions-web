import logo from "/assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded mt-10">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a href="#services" className="link link-hover">Services</a>
        <a href="" className="link link-hover">News</a>
        <a href="#about" className="link link-hover">About</a>
        <a href="#team" className="link link-hover">Nos Experts</a>
        <a href="#contact" className="link link-hover">Contactez-nous</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <i class="fa-brands fa-linkedin fa-2xl text-white"></i>
          </a>
          <a>
            <i class="fa-brands fa-twitter fa-2xl text-white"></i>
          </a>
            <a>
                <i class="fa-brands fa-tiktok fa-2xl text-white"></i>
            </a>
        </div>
      </nav>
      <aside>
        <p className="text-white">
          Copyright © 2023 - All right reserved by I&F Solutions inc.
        </p>
      </aside>
    </footer>
  );
}
