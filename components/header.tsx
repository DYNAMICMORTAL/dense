import style from '../styles/style.module.css';



// const styles = {
//     wrapper: "flex justify-center gap-10 p-5 bg-white",
//     content: "max-w-7xl w-full flex justify-between items-center gap-10",
//     logoContainer: "flex items-center justify-center p-4 text-2xl font-bold text-black cursor-pointer",
//     bannerNav: "flex cursor-pointer items-center space-x-5",
//     profilePhoto: "w-10 h-10 bg-gray-300 rounded-full",
//     draftName: "text-gray-400 text-sm px-5",

// }

const Header = () => {
return (
  // const ref = useRef<EditorJS>();
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.logoContainer}>
          <h1>DensE</h1>
          <div className="draftClass"><h5 className={style.draftName}>Draft</h5></div>
        </div>
        <div className={style.bannerNav}>
            <div className={style.bannerNavDiv1}>Publish</div>
            <div className={style.bannerNavDiv2}>Save Draft</div>
            <div className={style.profilePhoto}></div>
        </div>
      </div>
    </div>
)

}


export default Header