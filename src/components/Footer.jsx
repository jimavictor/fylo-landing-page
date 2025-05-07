import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/icon-location.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="space-y-4 bg-[#0C1524] p-4 pt-35 pb-10 lg:px-20">
      {/* LOGO */}
      <img className="my-9" src={logo} alt="Logo" />

      {/* Location */}
      <div className="flex flex-col justify-between space-y-5 md:flex-row">
        <div className="flex">
          <div className="mt-1 h-10 w-10 space-x-4">
            <img src={locationIcon} alt="location icon" />
          </div>
          <p className="max-w-50 lg:max-w-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* contact */}
        <div className="flex w-fit flex-col space-y-4">
          <div className="flex items-center">
            <img className="mr-3 h-5 w-5" src={phoneIcon} alt="phone icon" />
            <a
              href="tel:++1-543-123-4567"
              className="hover:text-blue-400 hover:underline md:min-w-32"
            >
              +1-543-123-4567
            </a>
          </div>
          <div className="flex items-center">
            <img className="mr-3 h-5 w-5" src={emailIcon} alt="email icon" />
            <a
              className="hover:text-blue-400 hover:underline"
              href="mailto:example@fylo.com"
            >
              example@fylo.com
            </a>
          </div>
        </div>

        {/* Navlinks */}
        <nav aria-label="Footer navigation">
          <ul>
            <li>
              <a className="hover:font-bold" href="/">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                Jobs
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                Press
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a className="hover:font-bold" href="/">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        {/* social Icons */}
        <div className="flex w-full items-start justify-center space-x-3 md:w-fit">
          <a
            href="https://www.facebook.com/"
            className="icon-wrapper rounded-full border-1 p-2"
          >
            <FaFacebook className="social-icon" size={12} />
          </a>
          <a
            href="https://www.x.com/"
            className="icon-wrapper rounded-full border-1 p-2"
          >
            <FaTwitter className="social-icon" size={12} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="icon-wrapper rounded-full border-1 p-2"
          >
            <FaInstagram size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
