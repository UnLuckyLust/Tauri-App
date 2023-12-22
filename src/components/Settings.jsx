import React from 'react';
import { SiteName, styles } from '../constants';

const Settings = () => {
  return (
    <div onContextMenu={(e)=> e.preventDefault()} className={`select-none w-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
      <div className={`flex flex-col items-center jusify-start mx-[10%]`}>
          <h1 className={`${styles.heroHeadText}`}>{SiteName} <span className="Highlight_Color-text-gradient">Settings</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200`}>
            Customize Your Experience.
          </p>
      </div>
    </div>
  )
}

export default Settings