import styles from './Header.module.css';

import { useAuthState } from '@/firebase/auth';

import {
  Topbanner,
  Member,
  HeaderLogoContainer,
  SearchInput,
  HeaderIcon,
  HeaderNav,
} from './';

function Header() {
  const { isLoading, error, user } = useAuthState();

  console.log(user);

  return (
    <>
      <Topbanner />
      <div className={styles.headerBorder}>
        <header className={styles.header}>
          <Member />
          <div className={styles.headerMain}>
            <HeaderLogoContainer />
            <SearchInput />
            <HeaderIcon />
          </div>
          <HeaderNav />
        </header>
      </div>
    </>
  );
}

export default Header;
