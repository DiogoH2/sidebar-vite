import { useState } from 'react';
import Img from 'react-image'
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

export  function SideBar(){
    const [open, setOpen] = useState(true);
    const Menus =[
      { title: "Dashboard", src: Chart_fill },
      { title: "Inbox", src: Chat },
      { title: "Accounts", src: User, gap: true },
      { title: "Schedule ", src: Calendar },
      { title: "Search", src: Search },
      { title: "Analytics", src: Chart },
      { title: "Files ", src: Folder, gap: true },
      { title: "Setting", src: Setting },
    ]


    function CloseMenu(){
            setOpen(!open);
    }

    return(
      <div className="flex">
        <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
            <img src={botaoMenu} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} alt="teste" onClick={CloseMenu} />
            <div className="flex gap-x-4 items-center">
              <img src={Logo} className={`cursos-pointer duration-500`}/>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
            </div>
            <ul>
              {Menus.map((menu, index) =>(
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 currsot-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                  <img src={menu.src} alt="" />
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
      </div>
    )
}