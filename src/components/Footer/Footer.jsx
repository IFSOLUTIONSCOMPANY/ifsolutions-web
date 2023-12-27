import logo from "/assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded mt-10">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
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
