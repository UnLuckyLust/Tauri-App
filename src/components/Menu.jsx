import React, { useState, useRef, useEffect } from "react";
import { logo, AppName, navLinks, styles, Organization, WebSite } from '../constants'
import { writeText, readText } from '@tauri-apps/api/clipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; // import css file from root.
const alertInfo = (text) => toast.info(text);
const alertSuccess = (text) => toast.success(text);
const alertWarning = (text) => toast.warning(text);
const alertError = (text) => toast.error(text);

const CopyText = (title, data) => {
  writeText(data)
  alertSuccess('Copied to clipboard - '+title);
}

const mappedElement = (item, isLink) => {
  const [hover, setHover] = useState(false)
  return (
    <li key={item.id} className={`${styles.sectionInfoText}`}>
      {isLink ? 
        <a href={item.id_tag + item.id} 
        className={`cursor-default hover:text-secondary`}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)} >
          {hover ? 
            <span className={`text-[22px]`}>{item.title}</span>
          : 
            <FontAwesomeIcon icon={item.icon} className="text-[30px]" />   
          }
        </a>
      :
        <div className={`flex flex-col`} onClick={() => CopyText(item.id, item.data)}>
          <span><FontAwesomeIcon icon={item.icon} /> {item.title}</span>
          <span className={`text-secondary`}>{item.data}</span>
        </div>
      }
    </li>
  )
}

const Menu = ({ title, links, isLink }) => {
  const [isMenu, setMenu] = useState(true);
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          isMenu ? setMenu(!isMenu) : setMenu(isMenu)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div onContextMenu={(e)=> e.preventDefault()} ref={wrapperRef} className="">
    <ToastContainer  floatingTime={1000} toastStyle={{ userSelect: "none", backgroundColor: "#2C2C2C", textAlign: "center", boxShadow: "0px 0px 10px 1px #ffffff", top: "30px"}}/>

    <ul data-tauri-drag-region className={`${styles.paddingX} ${isMenu ? 'fixed' : 'hidden' } select-none cursor-default top-0 left-0 bg-tertiary w-max h-screen py-2 z-40 flex flex-col justify-between items-center drop-shadow-[10px_0_10px_rgba(0,0,0,1)] rounded-r-[0.5rem]`}>
    
      {/* TITLE */}
      <div className={`w-max flex gap-2 mt-2`} onClick={() => setMenu(!isMenu)}>
        <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
        <p className={`${styles.sectionSubText} font-black`}>{title ? title : AppName}</p>
      </div>        

      {/* MENU */}
      <div className={`flex flex-col ${isLink ? 'gap-4' : 'gap-8'}`}>
      {links.map(link => mappedElement( link, isLink ))}
      </div>

      {/* FOOTER */}
      <div className={`w-max mb-2`}>
        <a href={WebSite} target="_tauri" className={`${styles.sectionSubText} font-black cursor-default`}>{Organization}</a>
      </div>
    </ul>

    </div>
  )
}

export default Menu