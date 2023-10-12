import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const Links = [
    { name: 'GITHUB', link: 'https://github.com/Jaysavvy' },
    { name: 'BACKGROUND', link: '#about-me' },
    { name: 'PROJECTS', link: '#my-projects' },
    { name: 'CONTACT', link: 'https://www.linkedin.com/in/sehwatz/' },
  ];

  const onClick = () => {
    location.href = 'http://myresume3456.s3-website-us-east-1.amazonaws.com/';
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hi, I'm Jason 👋🏼 </span>
          </a>
        </div>

        <div className="hidden md:flex w-full md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-large md:my-0 my-7">
                <a
                  href={link.link}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li key="button">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-large px-5 py-1 mr-1 mb- dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
                onClick={onClick}
              >
                Download Resume
              </button>
            </li>
          </ul>
        </div>

        <div className="ml-auto">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-solid-bg">
        <ul className="mt-2 space-y-2">
          {Links.map((link) => (
            <li key={link.name} className="text-xl">
              <a href={link.link} className="block p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
