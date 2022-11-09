import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/20/solid";
import React, {useState} from 'react';

function Header() {

    const [isClosed, setIsClosed] = useState<boolean>(true);

    const items = {
        home: {name: 'Home', active: false, href: "/"},
        team: {name: 'Team', active: false, href: "/"},
        contact :{name: 'Contact', active: false, href: "/"},
        cart:{name: 'Cart', active: false, href: "/", icon: <ShoppingCartIcon />},
        profile:{name: 'Profile', active: false, href: "/", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="},
    }

    const menuHandler = () => {
        setIsClosed(!isClosed);
    }




    return (
        <>
            <nav className="h-14 flex justify-evenly items-center bg-teal-400">

                {/*mobile menu*/}
                <div className="flex flex-row justify-between  md:hidden w-full items-center">
                    {isClosed ?
                        (
                                <Bars3Icon onClick={menuHandler} className={"text-white w-10 h-10 ml-4 hover:text-gray-200 hover:cursor-pointer"}/>
                        )
                        :
                        (
                            <div>
                                <XMarkIcon onClick={menuHandler} className={"text-white w-10 h-10 ml-4  hover:text-gray-200 hover:cursor-pointer border-solid border-2 rounded border-white"}/>
                                <section className="absolute top-14 left-0 px-8 py-8 bg-teal-200 w-full">
                                    <div className="flex flex-col justify-center items-center">
                                       <Link onClick={menuHandler} className="text-gray-800 px-16 py-2 hover:bg-teal-300" to={items.home.href}>{items.home.name}</Link>
                                       <Link onClick={menuHandler} className="text-gray-800 px-16 py-2 hover:bg-teal-300" to={items.team.href}>{items.team.name}</Link>
                                       <Link onClick={menuHandler} className="text-gray-800 px-16 py-2 hover:bg-teal-300" to={items.contact.href}>{items.contact.name}</Link>
                                    </div>
                                </section>
                            </div>
                        )
                    }
                    <div className="cursor-pointer mr-4">
                        <img className="w-10 h-10 rounded-full border-solid border-2  border-white" src={items.profile.img} alt={items.profile.name}/>
                    </div>
                </div>


            </nav>
        </>

    );
}

export default Header;


