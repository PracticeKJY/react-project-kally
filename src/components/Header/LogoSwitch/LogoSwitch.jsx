import styles from './LogoSwitch.module.css'
import Logo from '../../../../public/assets/icons/Icon/header-logo.svg'
import New from '../../../../public/assets/icons/Icon/header-new.svg'
export function LogoSwitch() {
  return (
    <>
      <h1 className={styles.a11yHidden}>마켓컬리</h1>
      <div className={styles.linkList}>
        <a href="./index.html">
          <img className={styles.mainLogo} src={Logo} alt="" />
        </a>
        <a href="./index.html" className={styles.isActive}>
          마켓칼리
        </a>
        <a href="/">뷰티칼리</a>
        <img src={New} alt="" className={styles.newBadge} />
      </div>
    </>
  )
}
