import {Bars3Icon, XMarkIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, FireIcon, RocketLaunchIcon, UserIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";

import React, {useState} from 'react';

function Header() {

    const [isClosed, setIsClosed] = useState<boolean>(true);
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);

    const items = {
        home: {name: 'Home', active: false, href: "/"},
        login: {name: 'Log in', active: false, href: "/"},
        signUp: {name: 'Sign up', active: false, href: "/"},
        profile: {
            name: 'Profile',
            active: false,
            href: "/",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
        },
    }

    const secondaryItems = [
        {name: 'About', href: "/"},
        {name: 'Apps', href: "/"},
        {name: 'Legal', href: "/"},
        {name: 'Privacy', href: "/"},
    ]

    const categoryMenuItems = [
        {name: "Hot", href: "/", icon: <FireIcon className="h-4 w-4 mr-2" />},
        {name: "Popular", href: "/", icon: <RocketLaunchIcon className="h-4 w-4 mr-2" />},
    ]

    const profileMenuItems = [
        {name: "Your profile", href: "/", icon: <UserIcon className="h-4 w-4 mr-2" />},
        {name: "Settings", href: "/", icon: <Cog6ToothIcon className="h-4 w-4 mr-2" />},
        {name: "Sign out", href: "/", icon: <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />},
    ]

    const menuHandler = () => {
        setProfileMenuOpen(false)
        setIsClosed(!isClosed);
    }

    const handleProfileClick = () => {
        setIsClosed(true);
        setProfileMenuOpen(!profileMenuOpen)
    }

    return (<>
            <nav className="h-14 flex justify-evenly items-center bg-teal-400">

                {/* mobile menu */}
                <div className="flex flex-row justify-between min-[640px]:hidden w-full items-center">
                    {isClosed ? (<Bars3Icon onClick={menuHandler}
                                            className="text-white w-10 h-10 ml-4 hover:text-gray-200 hover:cursor-pointer drop-shadow-md"/>) : (
                        <div>
                            <XMarkIcon onClick={menuHandler}
                                       className="text-white w-10 h-10 ml-4  hover:text-gray-200 hover:cursor-pointer border-solid border-2 rounded border-white"/>
                            <section className="absolute top-14 left-0 px-8 py-8 bg-teal-200 w-full z-1 drop-shadow">
                                <div className="flex justify-items-start flex-col items-center ">
                                    {!loggedIn ? (<>
                                            <Link onClick={menuHandler}
                                                  className="text-white px-16 py-2 mb-2 bg-teal-700 hover:bg-teal-600 w-[80%] text-center rounded"
                                                  to={items.login.href}
                                            >
                                                {items.login.name}
                                            </Link>
                                            <Link onClick={menuHandler}
                                                  className="text-gray-800 px-16 py-2 mb-6 w-[80%] text-center rounded border-solid border-2 border-teal-700"
                                                  to={items.signUp.href}
                                            >
                                                {items.signUp.name}
                                            </Link>
                                        </>) : (<>
                                            <section className="w-[80%] flex flex-col items-center">
                                                {categoryMenuItems.map(item => {
                                                    return <Link onClick={menuHandler}
                                                                 to={item.href}
                                                                 key={item.name}
                                                                 className="w-[60%] px-4 py-2 bg-teal-700 rounded text-white m-1 flex flex-row justify-center items-center">{item.icon}{item.name}
                                                    </Link>
                                                })}
                                            </section>
                                        </>)
                                    }
                                        <Link onClick={menuHandler}
                                              className="flex flex-row w-[70%] justify-start items-center mt-4"
                                              to="/"
                                        >
                                            <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                                            <div>Search</div>
                                        </Link>
                                        <Link onClick={menuHandler}
                                              className="flex flex-row w-[70%] justify-start items-center"
                                              to="/"
                                        >
                                            <QuestionMarkCircleIcon className="w-5 h-5 mr-2" />
                                            <div>Help</div>
                                        </Link>

                                        <section className="flex flex-row justify-between items-center w-[80%] mt-5 border-t-2 border-solid border-teal-900">
                                            {secondaryItems.map(item => {
                                                return <Link onClick={menuHandler}
                                                             key={item.name}
                                                             className="text-sm text-teal-900 mt-2"
                                                             to={item.href}>{item.name}
                                                </Link>
                                            })}
                                        </section>
                                </div>
                            </section>
                        </div>)}


                </div>
                {/* end mobile menu */}

                {/* profile section */}
                <section className="w-[100%] flex justify-end">
                    {loggedIn && (
                        <div onClick={handleProfileClick} className="cursor-pointer mr-4 drop-shadow-lg select-none">
                            <img className="w-10 h-10 rounded-full border-solid border-2 border-white select-none "
                                 src={items.profile.img} alt={items.profile.name}/>
                        </div>
                    )}

                    {profileMenuOpen && (
                        <section className="absolute top-14 right-0 px-2 py-2 bg-teal-200 w-[48%] z-1 drop-shadow flex flex-col items-center justify-center rounded-b">
                            {profileMenuItems.map(item => {
                                return <Link key={item.name}
                                             to={item.href}
                                             className="text-sm flex flex-row items-center my-1"
                                             onClick={handleProfileClick}>{item.icon}{item.name}
                                </Link>
                            })}
                        </section>
                    )}
                </section>
                {/* end profile section */}


            </nav>
        </>

    );
}

export default Header;


