import { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export function Header() {
    const [style, setStyle] = useState('offDark');


    const Menus = [
        { title: "Dashboard", },
        { title: "Inbox", },
        { title: "Accounts", gap: true },
        { title: "Schedule ", },
        { title: "Search", },
        { title: "Analytics", },
        { title: "Files ", gap: true },
        { title: "Setting", },
    ]



    return (
        <div className={style}>
            <div className="flex flex-row border-b duration-300 border-black bg-dark-purple  dark:bg-black dark:border-r dark:border-white  md:hidden sm:hidden justify-between p-2">
                <div className="flex gap-x-4 items-center ">
                    <img src={Logo} className={`cursos-pointer p-5`} />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
                </div>
                <div className='flex text-white'>
                    <ul className='flex flex-row'>
                        {Menus.map((menu, index) => (
                            <li key={index} className={`text-gray-300 text-sm  gap-x-4 cursor-pointer p-8 hover:bg-light-white rounded-md mt-6`}>
                                <span>{menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}