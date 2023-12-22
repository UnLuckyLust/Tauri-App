import React from 'react';
import { styles } from '../styles';

const About = () => {
  return (
    <div className={`w-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
      <div className={`mx-[10%] flex flex-col justify-center gap-6 items-center`}>
        <h2 className={`${styles.sectionHeadText}`}>A Glimpse into Our Journey</h2>
        <p className={`${styles.sectionInfoText} overflow-auto`} >
          Hello, I'm UnLuckuLust. I wield the magic of code to craft captivating web experiences. With HTML, CSS, and JavaScript, I breathe life into designs, making them interactive and user-friendly.

          But my creativity doesn't stop there. I'm also a Game Developer, conjuring immersive worlds where every line of code adds depth and excitement. Characters and stories come alive with a touch of my digital enchantment.

          Join me in exploring the seamless blend of technology and imagination.
        </p>
      </div>
    </div>
  )
}

export default About