import React from "react";
import { Link } from "gatsby";
import { useAuth } from "../../lib/AuthContext";
import DropdownMenu from "../DropdownMenu";

const Header = ({ app }) => {
  const auth = useAuth();
  const isApp = app;

  return (
    <div className="bg-gray-200 px-4 py-4">
      <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
        <div>
          <a
            href="/"
            className="inline-block py-2 text-gray-800 text-2xl font-bold"
          >
            SmartFrame.me
          </a>
        </div>

        <div>
          <div className="hidden md:block">
            <a
              href="/"
              className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
            >
              How it Works
            </a>
            <a
              href="/"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
            >
              Solutions
            </a>

            <a
              href="/"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
            >
              Pricing
            </a>
            <a
              href="/"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="md:block">
          {!isApp && auth.isAuth && (
            <Link
              to="/app"
              className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
            >
              Go to app
            </Link>
          )}

          {!isApp && !auth.isAuth && (
            <>
              <Link
                to="/sign-in"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Login
              </Link>
              <Link
                to="/create-account"
                className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
              >
                Create account
              </Link>
            </>
          )}

          {isApp && <DropdownMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
