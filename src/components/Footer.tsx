import { useState } from 'react';
import Logo from '../assets/logo.png';

export function Footer(){
    const [style, setStyle] = useState('offDark');

    return(
        <div className={style}>
            <div className="border-t duration-300 border-black bg-dark-purple dark:bg-black dark:border-white">
             <div className="flex flex-col gap-x-4 items-center">
            <img src={Logo} className={`cursos-pointer p-5`} />
            <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
          </div>
        </div>
        </div>
    )
}