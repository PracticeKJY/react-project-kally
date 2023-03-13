import styles from './HeaderLogoContainer.module.css'
import { HeaderContainerList, HeaderLogo, NewBadge } from './'

function HeaderContainer({ children }) {
  return <div className={styles.headerContainer}>{children}</div>
}

function HeaderLogoContainer() {
  return (
    <>
      <h1 className={styles.a11yHidden}>마켓컬리</h1>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderContainerList className={styles.market} text={'마켓칼리'} />
        <HeaderContainerList className={styles.beauty} text={'뷰티칼리'} />
        <NewBadge />
      </HeaderContainer>
    </>
  )
}
export default HeaderLogoContainer
/* ---------------------------------- 수정한것 ---------------------------------- */
//1. component화

{
  /* <a href="/">
  <img className={styles.mainLogo} src={Logo} alt="" />
  </a> */
}

{
  /* <a href="/" className={styles.market}>
          마켓칼리
          </a> */
}
{
  /* <a href="/" className={styles.beauty}>
          뷰티칼리
          </a> */
}

{
  /* <img src={New} alt="" className={styles.newBadge} /> */
}
