import { Member } from './Member/Member'
import { LogoSwitch } from './LogoSwitch/LogoSwitch'
import { SearchInput } from './SearchInput/SearchInput'
import { HeaderIcon } from './HeaderIcon/HeaderIcon'
import { HeaderNav } from './HeaderNav/HeaderNav'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <a href="/">
        <div className={styles.topbanner}>
          지금 가입하고 인기상품 <span className={styles.test01}>100</span>원에
          받아가세요
        </div>
      </a>
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <LogoSwitch />
          <SearchInput />
          <HeaderIcon />
        </div>
        <HeaderNav />
      </header>
    </>
  )
}

export default Header
