import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles'
import { logo, menu, close, SiteName, Organization, Version, navLinks } from '../constants'
import { appWindow } from '@tauri-apps/api/window'

const NavBar = ({ useLinks, OnlySmall, NavList }) => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const [activeMenu, setActiveMenu] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  const [maximized, setMaximized] = useState(false);

  const windowLinks = () => {
    if (useLinks) {
      return (
        <>
        {/* MENU */}
  
        <ul className={`${OnlySmall ? 'md:hidden' : 'md:flex' } hidden list-none  flex-row gap-10`}>
          {NavList.map((link) => (
            <li
            key={link.id}
            className={`${
              activeMenu === link.id
              ? "text-white"
              : "text-secondary"
            } hover:text-white font-poppins sm:font-bold font-medium cursor-pointer text-[16px] sm:text-[20px] `}
            onClick={() => setActiveMenu(link.title)}
            >
              <a href={link.id_tag + link.id}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
  
        {/* SMALL MENU */}
  
        <div className={`${OnlySmall ? 'md:flex' : 'md:hidden' } flex flex-1 justify-center items-center`}>
            <img src={toggleMenu ? close : menu} alt="menu" 
              className={`${toggleMenu ? 'h-[15px] w-[15px]' : 'h-[20px] w-[20px]'} object-contain cursor-pointer`} 
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <div className={`${ !toggleMenu ? 'hidden' : 'flex' } bg-black absolute top-12 center-0 z-10 rounded-2xl border-x-[3px] border-secondary`}>
              <ul className='list-none flex justify-end items-start flex-col gap-2 py-2'>
                {NavList.map((link) => (
                  <li
                  key={link.id}
                  className={`${
                    activeMenu === link.title
                    ? "text-secondary"
                    : "text-white-200"
                  } cursor-default font-poppins font-bold cursor-pointer text-[18px] hover:text-secondary w-full px-4 rounded-2xl`}
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                    setActiveMenu(link.title);
                  }}
                  >
                    <a href={link.id_tag + link.id} className='cursor-default px-3 rounded-2xl'>
                    {activeMenu === link.title ? '‣' : '∙'} {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
        </>
      )
    }
  }

  return (
    <nav data-tauri-drag-region className={`${styles.paddingX} w-full py-2 fixed z-30 top-0 bg-primary flex flex-row justify-between drop-shadow-[0_10px_10px_rgba(0,0,0,1)]`}>

      {/* TITLE */}

      <div className={`w-min flex justify-center items-center font-black gap-2 cursor-default select-none`}
      onClick={() => setToggle(!toggle)}>
        <div className='w-7 h-7'>
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <p className={`${styles.sectionInfoText} w-max`}>{SiteName}</p>

        <div className={`${ !toggle ? 'hidden' : 'flex' }  bg-black absolute top-12 left-5 z-10 rounded-2xl border-x-[3px] border-secondary`}>
          <ul className='list-none flex justify-end items-start flex-col gap-2 py-2'>
            {navLinks.map((link) => (
              <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-secondary"
                : "text-white-200"
              } cursor-default font-poppins font-bold cursor-pointer text-[18px] hover:text-secondary w-full px-4 rounded-2xl`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
              >
                <a href={link.id_tag + link.id} className='cursor-default px-3 rounded-2xl'>
                 {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {windowLinks()}

      {/* BOTTONS */}

      <div className="w-min flex gap-1">
        <button onClick={() => { appWindow.minimize(); }} className='contrast-0 hover:contrast-100 transition-[.3s] cursor-default'>🟡</button>
        <button onClick={() => {setMaximized(!maximized); maximized ? appWindow.unmaximize() : appWindow.maximize() }} className='contrast-0 hover:contrast-100 transition-[.3s]'>🟠</button>
        <button onClick={() => { appWindow.close(); }} className='contrast-0 hover:contrast-100 transition-[.3s] cursor-default'>🔴</button>
      </div>
    </nav>
  )
}

export default NavBar