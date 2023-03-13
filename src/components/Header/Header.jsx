import styles from './Header.module.css'
import {
  SearchInput,
  HeaderLogoContainer,
  HeaderIcon,
  HeaderNav,
  Member,
  Topbanner,
} from '@/components/Header'

function Header() {
  return (
    <>
      <Topbanner />
      <header className={styles.header}>
        <Member />
        <div className={styles.headerMain}>
          <HeaderLogoContainer />
          <SearchInput />
          <HeaderIcon />
        </div>
        <HeaderNav />
      </header>
    </>
  )
}

export default Header
