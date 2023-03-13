import styles from './LogoSwitch.module.css'
import Logo from '@/assets/icons/Icon/header-logo.svg'
import New from '@/assets/icons/Icon/header-new.svg'
import ProductDetail from './../../../pages/ProductDetail/ProductDetail'
export function LogoSwitch() {
  return (
    <>
      <h1 className={styles.a11yHidden}>마켓컬리</h1>
      <div className={styles.linkList}>
        <a href="/">
          <img className={styles.mainLogo} src={Logo} alt="" />
        </a>
        <a href="/" className={styles.market}>
          마켓칼리
        </a>
        <a href="/" className={styles.beauty}>
          뷰티칼리
        </a>
        <img src={New} alt="" className={styles.newBadge} />
      </div>
    </>
  )
}

{
  /* <Prac className={'styles.market'} text={'마켓칼리'} />
<Prac className={'styles.beauty'} text={'뷰티칼리'} /> */
}
// function Prac({ className, text }) {
//   return (
//     <a href="/" className={className}>
//       {text}
//     </a>
//   )
// }
