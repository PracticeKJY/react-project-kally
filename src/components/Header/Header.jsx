import {
  LogoSwitch,
  SearchInput,
  HeaderIcon,
  HeaderNav,
  Member,
  Topbanner,
} from '@/components/Header'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <LogoSwitch />
          <SearchInput />
          <HeaderIcon />
        </div>
      </header>
      <HeaderNav />
    </>
  )
}

export default Header
