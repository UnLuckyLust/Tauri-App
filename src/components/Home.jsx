import { styles } from '../styles';

const Home = () => {
  return (
    <div onContextMenu={(e)=> e.preventDefault()} className={`select-none w-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
      <div className={`flex flex-col items-center jusify-start`}>
          <h1 className={`${styles.heroHeadText}`}>The Home of <span className="Highlight_Color-text-gradient">Safe Wallet</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Welcome to Safe Wallet Windows App
          </p>
      </div>
    </div>
  )
}

export default Home