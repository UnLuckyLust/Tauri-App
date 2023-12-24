import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Organization, styles, donationLinks, WebSite} from '../constants';
import { currentMonitor } from '@tauri-apps/api/window';
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee
  , faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
const monitor = currentMonitor();
const currentYear = new Date().getFullYear();

const Footer = ({ clearBG }) => { 
  const [isFooterMenu, setFooterMenu] = useState(false);
  return (
    <>
    {isFooterMenu ? <Menu title={'Donation Links'} links={donationLinks} /> : ''}

    <div onContextMenu={(e)=> e.preventDefault()} className={`${clearBG ? 'bg-none' : 'bg-black-100'} ${styles.paddingX} w-[100%] fixed z-30 bottom-0 left-0 drop-shadow-[0_-10px_10px_rgba(0,0,0,1)]`}>
      <div className={`py-2 flex w-full flex-row items-center justify-between`}>
        {/* CopyRight */}
        <a href={WebSite} target="_tauri" className='cursor-default select-none text-[14px]'>
          &copy; {currentYear} {Organization} | all rights reserved         
        </a>
        {/* <p className='select-none text-[14px]'>
          &copy; {currentYear} {Organization} | all rights reserved         
        </p> */}
        <div className="flex gap-4 text-secondary sm:justify-center">
          {/* Donation */}
          <FontAwesomeIcon icon={faBitcoin} className="opacity-80 hover:opacity-100 mt-[3px]" onClick={() => setFooterMenu(!isFooterMenu)}/>
          
          {/* YouTube */}
          <a href="https://youtube.com/@UnLuckyLust" target="_tauri" className="opacity-80 hover:opacity-100 cursor-default">
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          {/* GitHub */}
          <a href="https://github.com/UnLuckyLust" target="_tauri" className="opacity-80 hover:opacity-100 cursor-default">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>

          {/* Cfx.re */}
          <Typography as="a" href="https://forum.cfx.re/u/unluckylust/activity/topics" target="_tauri" className="opacity-80 hover:opacity-100 cursor-default">
            <svg className="h-[23px] w-[15px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" fillRule="evenodd" clipRule="evenodd">
              <path
                d="M22.4 24h-5.225c-.117 0-.455-1.127-1.026-3.375-1.982-6.909-3.124-10.946-3.417-12.12l3.37-3.325h.099c.454 1.42 2.554 7.676 6.299 18.768ZM12.342 7.084h-.048a3.382 3.385 0 0 1-.098-.492v-.098a102.619 102.715 0 0 1 3.272-3.275c.13.196.196.356.196.491v.05a140.694 140.826 0 0 1-3.322 3.324ZM5.994 10.9h-.05c.67-2.12 1.076-3.209 1.223-3.275L14.492.343c.08 0 .258.524.533 1.562zm1.37-4.014h-.05C8.813 2.342 9.612.048 9.71 0h4.495v.05a664.971 664.971 0 0 1-6.841 6.839Zm-2.69 7.874h-.05c.166-.798.554-1.418 1.174-1.855a312.918 313.213 0 0 1 5.71-5.717h.05c-.117.672-.375 1.175-.781 1.52zM1.598 24l-.098-.05c1.399-4.172 2.148-6.322 2.248-6.45l6.74-6.694v.05C10.232 11.88 8.974 16.263 6.73 24Z"
              />
            </svg>
          </Typography>
          
          {/* Discord */}
          <a href="https://discord.gg/gtH9nkGrHu" target="_tauri" className="opacity-80 hover:opacity-100 cursor-default">
            <FontAwesomeIcon icon={faDiscord} /> 
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer