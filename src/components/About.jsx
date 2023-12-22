import React from 'react';
import { styles } from '../constants';

const About = () => {
  return (
    <div onContextMenu={(e)=> e.preventDefault()} className={`select-none w-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
      <div className={`flex flex-col items-center jusify-start mx-[10%]`}>
          <h1 className={`${styles.heroHeadText}`}>A Glimpse into Our <span className="Highlight_Color-text-gradient">Journey</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200`}>
          Hello, I'm UnLuckuLust. I wield the magic of code to craft captivating web experiences. With HTML, CSS, and JavaScript, I breathe life into designs, making them interactive and user-friendly.
          <br />
          But my creativity doesn't stop there. I'm also a Game Developer, conjuring immersive worlds where every line of code adds depth and excitement. Characters and stories come alive with a touch of my digital enchantment.
          <br />
          Join me in exploring the seamless blend of technology and imagination.
          </p>
      </div>
    </div>
  )
}

export default About