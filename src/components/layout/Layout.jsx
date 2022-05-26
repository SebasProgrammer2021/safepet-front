import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
          <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
            <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link className="flex items-center gap-3 " to="/">
                  <img
                    className="h-10 w-10"
                    alt="icon"
                    src="https://img.icons8.com/color/48/000000/home--v1.png"
                  />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link className="flex items-center gap-3 " to="/about">
                  <img
                    className="h-10 w-10"
                    alt="icon"
                    src="https://img.icons8.com/color/48/000000/info--v1.png"
                  />
                  <span className="hidden sm:inline">About</span>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link
                  className="flex items-center gap-3 "
                  to="/affiliate"
                  role="button"
                >
                  <img
                    className="h-10 w-10"
                    alt="icon"
                    src="https://img.icons8.com/color/48/000000/group.png"
                  />
                  <span className="hidden sm:inline">Afiliados</span>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link
                  className="flex items-center gap-3 "
                  to="/plans"
                  role="button"
                >
                  <img
                    className="h-10 w-10"
                    alt="icon"
                    src="https://img.icons8.com/color/48/000000/odata.png"
                  />
                  <span className="hidden sm:inline">Planes</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl border my-3 w-full hidden md:flex">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-indigo-600 overflow-ellipsis">
                  Made with Tailwind CSS!
                </span>
              </h2>
            </div>
          </div>
        </div>
        <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
