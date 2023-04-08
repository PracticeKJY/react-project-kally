import styles from './Header.module.css';

import {
  Topbanner,
  Member,
  HeaderLogoContainer,
  SearchInput,
  HeaderIcon,
  HeaderNav,
} from './';

import { useWriteBatchData } from '@/firebase/firestore/';
import { shopData } from '@/pages/ProductList/shopData.js';

function Header() {
  const { writeBatchData, isLoading, error } = useWriteBatchData(
    'categories',
    'title'
  );

  // console.log(writeBatchData(shopData));
  const handleWriteBatchData = () => {
    writeBatchData(shopData);
  };

  if (error) {
    console.log(error);
  }

  console.log(writeBatchData(shopData));

  return (
    <>
      <Topbanner />

      <button type="button" onClick={handleWriteBatchData}>
        일괄 데이터 쓰기
      </button>
      <div className={styles.headerBorder}>
        <header className={styles.header}>
          <Member />
          <div className={styles.headerMain}>
            <HeaderLogoContainer />
            <div
              style={{ paddingRight: '100px' }}
              // className={s}
            >
              <SearchInput />
            </div>
            <HeaderIcon />
          </div>
          <HeaderNav />
        </header>
      </div>
    </>
  );
}

export default Header;
