import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  FireIcon,
  RocketLaunchIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

import { useState } from "react";
import Search from "./Search";
import { useAppDispatch, useAppSelector } from "../context-manager/hooks";
import { UserContextInterface } from "../utils/modal";
import { logUserOut, userState } from "../context-manager/features/userSlice";

function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const user: UserContextInterface = useAppSelector(userState);
  let loggedIn;

  if (user.id == null) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }

  const logOut = () => {
    dispatch(logUserOut());
  };

  const items = {
    home: { name: "Home", active: false, href: "/" },
    login: { name: "Sign in", active: false, href: "/sign-in" },
    signUp: { name: "Sign up", active: false, href: "/sign-up" },
    profile: {
      name: user.name!,
      href: "/my-profile",
      img: user.userImg!,
    },
  };

  const secondaryItems = [
    { name: "About", href: "/" },
    { name: "Apps", href: "/" },
    { name: "Legal", href: "/" },
    { name: "Privacy", href: "/" },
  ];

  const categoryMenuItems = [
    { name: "Hot", href: "/", icon: <FireIcon className="h-4 w-4 mr-2" /> },
    {
      name: "Popular",
      href: "/",
      icon: <RocketLaunchIcon className="h-4 w-4 mr-2" />,
    },
  ];

  const profileMenuItems = [
    {
      name: "Your profile",
      href: `/my-profile`,
      icon: <UserIcon className="h-4 w-4 mr-2" />,
    },
    {
      name: "Settings",
      href: "/",
      icon: <Cog6ToothIcon className="h-4 w-4 mr-2" />,
    },
    {
      name: "Sign out",
      href: "/",
      icon: <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />,
      action: logOut,
    },
  ];

  const menuHandler = () => {
    setProfileMenuOpen(false);
    setIsClosed(!isClosed);
  };

  const handleProfileClick = () => {
    setIsClosed(true);
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <>
      <nav className="sticky z-10 top-0 w-[100%] lg:h-20 h-14 flex justify-between items-center  bg-gradient-to-r from-green-400 to-teal-600 drop-shadow-lg">
        {/* full screen view  */}

        <section
          className={
            loggedIn
              ? " w-[80%] min-[640px]:block hidden"
              : " w-[100%] min-[640px]:block hidden"
          }
        >
          <div className="flex flex-row justify-start items-center ml-8">
            <Link to={items.home.href}>
              <HomeIcon className="h-12 w-12 hover:bg-teal-800 hover:text-white rounded p-2 text-teal-900  text-xl mr-8 cursor-pointer" />
            </Link>
            <Search />
            {!loggedIn && (
              <div className="justify-self-end absolute right-0">
                <Link
                  to={items.signUp.href}
                  className="bg-teal-900 hover:bg-teal-800 rounded px-8 py-3 text-white text-xl mr-8 cursor-pointer"
                >
                  {items.signUp.name}
                </Link>
                <Link
                  to={items.login.href}
                  className="bg-white hover:bg-teal-100 rounded px-8 py-3 text-teal-900 text-xl mr-10 cursor-pointer"
                >
                  {items.login.name}
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* end full screen view  */}

        {/* mobile view */}
        <div className="flex flex-row justify-between min-[640px]:hidden w-full items-center">
          {isClosed ? (
            <Bars3Icon
              onClick={menuHandler}
              className="text-white w-10 h-10 ml-4 hover:text-gray-200 hover:cursor-pointer drop-shadow-md"
            />
          ) : (
            <div>
              <XMarkIcon
                onClick={menuHandler}
                className="text-white w-10 h-10 ml-4  hover:text-gray-200 hover:cursor-pointer border-solid border-2 rounded border-white"
              />
              <section className="absolute top-14 left-0 px-8 py-8 bg-emerald-50 w-full z-1 drop-shadow">
                <div className="flex justify-items-start flex-col items-center ">
                  {!loggedIn ? (
                    <>
                      <Link
                        onClick={menuHandler}
                        className="text-white px-16 py-2 mb-2 bg-teal-700 hover:bg-teal-600 w-[80%] text-center rounded"
                        to={items.login.href}
                      >
                        {items.login.name}
                      </Link>
                      <Link
                        onClick={menuHandler}
                        className="text-gray-800 px-16 py-2 mb-6 w-[80%] text-center rounded border-solid border-2 border-teal-700"
                        to={items.signUp.href}
                      >
                        {items.signUp.name}
                      </Link>
                    </>
                  ) : (
                    <>
                      <section className="w-[80%] flex flex-col items-center">
                        {categoryMenuItems.map((item) => {
                          return (
                            <Link
                              onClick={menuHandler}
                              to={item.href}
                              key={item.name}
                              className="w-[60%] px-4 py-2 bg-teal-700 rounded text-white m-1 flex flex-row justify-center items-center"
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          );
                        })}
                      </section>
                    </>
                  )}
                  <Link
                    onClick={menuHandler}
                    className="flex flex-row w-[70%] justify-start items-center mt-4"
                    to="/"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                    <div>Search</div>
                  </Link>
                  <Link
                    onClick={menuHandler}
                    className="flex flex-row w-[70%] justify-start items-center"
                    to="/"
                  >
                    <QuestionMarkCircleIcon className="w-5 h-5 mr-2" />
                    <div>Help</div>
                  </Link>

                  <section className="flex flex-row justify-between items-center w-[80%] mt-5 border-t-2 border-solid border-teal-900">
                    {secondaryItems.map((item) => {
                      return (
                        <Link
                          onClick={menuHandler}
                          key={item.name}
                          className="text-sm text-teal-900 mt-2"
                          to={item.href}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </section>
                </div>
              </section>
            </div>
          )}
        </div>
        {/* end mobile view */}

        {/* profile section */}
        {loggedIn && (
          <section data-testid="profile" className="w-[40%] flex justify-end">
            <div
              data-testid="profile-icon"
              onClick={handleProfileClick}
              className="cursor-pointer lg:mr-8 mr-4 drop-shadow-lg select-none"
            >
              <img
                className="lg:w-14 lg:h-14 w-10 h-10 rounded-full border-solid border-2 border-white select-none "
                src={items.profile.img}
                alt={items.profile.name}
              />
            </div>
            {profileMenuOpen && (
              <section
                data-testid="profile-menu"
                className="absolute lg:top-20 top-14 right-0 px-2 py-2 bg-emerald-50 sm:w-[48%] lg:w-[15%] z-1 drop-shadow flex flex-col items-center justify-center rounded-b"
              >
                {profileMenuItems.map((item) => {
                  return (
                    <div key={item.name} onClick={handleProfileClick}>
                      <Link
                        to={item.href}
                        className="text-md flex flex-row items-center my-1 hover:bg-emerald-100 px-3 py-1 rounded drop-shadow-sm"
                        onClick={item.action}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </section>
            )}
          </section>
        )}
        {/* end profile section */}
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
