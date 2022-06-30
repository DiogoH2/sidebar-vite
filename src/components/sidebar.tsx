import { useState } from 'react';
import botaoMenu from '../assets/control.png';
import Logo from '../assets/logo.png';
import Chart_fill from '../assets/Chart_fill.png';
import Chat from '../assets/Chat.png';
import User from '../assets/User.png';
import Calendar from '../assets/Calendar.png';
import Search from '../assets/Search.png';
import Chart from '../assets/Chart.png';
import Folder from '../assets/Folder.png';
import Setting from '../assets/Setting.png';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Footer } from './Footer';
import { Header } from './Header';




export function SideBar() {
  const [open, setOpen] = useState(true);
  const [style, setStyle] = useState('offDark');
  const [moon, setMoon] = useState('visible');
  const [sun, setSun] = useState('hidden');



  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ]


  function CloseMenu() {
    setOpen(!open);
  }

  function DarkMode() {
    setStyle('dark');
    setMoon('hidden')
    setSun('visible')

  }

  function LightMode() {
    setStyle('offDark');
    setMoon('visible')
    setSun('hidden')

  }

  return (
    <div className={style}>
      <Header />
      <div className="flex ">
        <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple border-r border-black dark:bg-black dark:border-r dark:border-white relative lg:hidden xl:hidden 2xl:hidden`}>
          <img src={botaoMenu} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple dark:border-white ${!open && "rotate-180"}`} alt="teste" onClick={CloseMenu} />
          <div className="flex gap-x-4 items-center">
            <img src={Logo} className={`cursos-pointer duration-500`} />
            <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
          </div>
          <ul>
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                <img src={menu.src} alt="" />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen dark:text-white dark:bg-slate-900 duration-300">
          <div className='flex flex-row justify-end items-end'>
            <div className={`flex items-center  cursor-pointer pt-4 pl-2 text-yellow-300 `}>
              <FaMoon className={moon} onClick={DarkMode} />
            </div>
            <div className={`flex items-center  cursor-pointer pt-4 pl-2 text-yellow-300`}>
              <FaSun className={sun} onClick={LightMode} />
            </div>
          </div>
          <h1 >Home Page</h1>
        </div>
      </div>
      <Footer />
    </div>

  )
}