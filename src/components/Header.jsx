import { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    function handleResize() {
      setIsMobile(window.innerWidth < 762);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const navbarColor =
    !isMobile ? scrollPosition > 3050
      ? "bg-black"
      : scrollPosition > 720
      ? "bg-yellow-600"
      : "bg-transparent" : scrollPosition > 7400
      ? "bg-black"
      : scrollPosition > 720
      ? "bg-yellow-600"
      : "bg-transparent";

  return (
    <>
      <div
        className={`flex z-50 flex-wrap place-items-cente fixed transition-colors duration-500 ${navbarColor}`}
      >
        <section className="relative mx-auto">
          <nav className="flex justify-between  text-white w-screen">
            <div className="px-5 xl:px-8 py-2 flex w-full items-center">
              <a
                className="text-xl font-bold font-heading flex flex-row gap-2 text-center items-center hover:underline"
                href="#"
              >
                <img
                  className="rounded-full w-8 h-8"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E0BAQFqQxwMkvMXPg%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3D_UPJ2wHmt1CMEjAiPqLjD2I1lEf6mN4SRdliWRsrzcI&f=1&nofb=1&ipt=9726b7f5fb04c69b0961debce85a21e033c3cb6c56e209517fa0ea049c25c0af&ipo=images"
                  alt="Flybondi logo"
                />
                Flybondi
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a
                    className="hover:text-gray-200 hover:underline underline-offset-4"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-gray-200 hover:underline underline-offset-4"
                    href="#"
                  >
                    My books
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-gray-200 hover:underline underline-offset-4"
                    href="#"
                  >
                    Flights
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-gray-200 hover:underline underline-offset-4"
                    href="#"
                  >
                    Airports
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-gray-200 hover:underline underline-offset-4"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="hidden xl:flex items-center lg:flex space-x-5">
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                <a
                  className="flex items-center text-sm hover:text-gray-200 border-4 border-yellow-500 hover:border-yellow-300 transition-colors duration-300 p-2 rounded-3xl"
                  href="#"
                >
                  Check in
                </a>
              </div>
            </div>
            <a className="xl:hidden lg:hidden flex mr-4 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a
              className="navbar-burger self-center mr-5 xl:hidden lg:hidden"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;
