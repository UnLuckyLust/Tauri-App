import React from 'react';
import { styles } from '../constants';

const About = () => {
  return (
    <div onContextMenu={(e)=> e.preventDefault()} className={`select-none w-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
      <div className={`flex flex-col items-center jusify-start mx-[10%]`}>
          <h1 className={`${styles.heroHeadText}`}>A Glimpse into <span className="Highlight_Color-text-gradient">Our Story</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200`}>
          We are the Dreams Weavers, we wield the magic of code to craft captivating experiences, Conjuring immersive worlds where every line of code adds depth and excitement.
          <br />
          We make dreams come alive with the touch of our digital enchantment.
          <br />
          Welcome to our Realm!
          </p>
      </div>
    </div>
  )
}

export default About