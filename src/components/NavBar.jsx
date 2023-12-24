import React, { useState, useRef, useEffect } from "react";
import { logo, AppName, navLinks, styles } from '../constants'
import { appWindow } from '@tauri-apps/api/window'
import Menu from "./Menu";
import Footer from "./Footer";

const NavBar = ({ clearBG }) => {
  const [menu, setMenu] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [isNavMenu, setNavMenu] = useState(false);
  return (
    <>
    <nav data-tauri-drag-region onContextMenu={(e)=> e.preventDefault()} className={`${styles.paddingX} ${clearBG ? 'bg-none' : 'bg-black-100'} select-none cursor-default w-full py-2 fixed z-30 top-0 flex flex-row justify-between drop-shadow-[0_10px_10px_rgba(0,0,0,1)]`}>

      {/* TITLE */}
      <div className={`w-max flex gap-2`} onClick={() => setNavMenu(!isNavMenu)}>
        <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
        <p className={`${styles.sectionSubText} font-black`}>{AppName}</p>
      </div>

      {/* BOTTONS */}
      <div className="w-min flex gap-1" >
        <button onClick={() => { appWindow.minimize(); menu ? setMenu(!menu) : setMenu(menu); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🟡</button>
        <button onClick={() => {setMaximized(!maximized); maximized ? appWindow.unmaximize() : appWindow.maximize(); menu ? setMenu(!menu) : setMenu(menu); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🟢</button>
        <button onClick={() => { appWindow.close(); }} className='brightness-[0.3] hover:brightness-100 transition-[.3s] cursor-default'>🔴</button>
      </div>
    </nav>
      {isNavMenu ? <Menu links={navLinks} isLink={true}/> : ''}
      <Footer clearBG={clearBG} />
    </>
  )
}

export default NavBar