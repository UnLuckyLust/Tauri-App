import React, { useState, useRef, useEffect } from "react";
import { logo, SiteName, navLinks, styles } from '../constants'
import { appWindow } from '@tauri-apps/api/window'

const NavBar = ({ clearBG }) => {

  const [menu, setMenu] = useState(false);
  const [maximized, setMaximized] = useState(false);

  return (
    <nav data-tauri-drag-region onContextMenu={(e)=> e.preventDefault()} className={`${styles.paddingX} ${clearBG ? 'bg-none' : 'bg-primary'} select-none cursor-default w-full py-2 fixed z-30 top-0 flex flex-row justify-between drop-shadow-[0_10px_10px_rgba(0,0,0,1)]`}>

      {/* TITLE */}
      <div className={`w-min flex justify-center items-center font-black gap-2`}>
        <a className='w-7 h-7 select-none cursor-default' href='/'>
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </a>
        <p onClick={() => setMenu(!menu)} className={`${styles.sectionInfoText} mt-0.5 w-max`}>{SiteName}</p>
        <ul className={`${menu ? 'flex' : 'hidden' } ml-0.5 w-max list-none gap-2 select-none`}>
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`text-secondary brightness-75 hover:brightness-100 mt-1.5 font-normal text-[15px] `}>
              <a href={link.id_tag + link.id}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* BOTTONS */}
      <div className="w-min flex gap-1" >
        <button onClick={() => { appWindow.minimize(); menu ? setMenu(!menu) : setMenu(menu); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🟡</button>
        <button onClick={() => {setMaximized(!maximized); maximized ? appWindow.unmaximize() : appWindow.maximize(); menu ? setMenu(!menu) : setMenu(menu); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🟠</button>
        <button onClick={() => { appWindow.close(); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🔴</button>
      </div>
    </nav>
  )
}

export default NavBar