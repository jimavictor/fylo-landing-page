import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="flex justify-between p-6 md:px-9 md:py-9">
      <a href="/">
        <img className="w-[74px]" src={logo} alt="My Logo" />
      </a>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a className="hover:font-bold hover:underline" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="hover:font-bold hover:underline" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="hover:font-bold hover:underline" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;