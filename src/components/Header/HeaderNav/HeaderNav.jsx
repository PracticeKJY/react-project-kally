import { useScrollEvent } from './useScrollEvent';

import styles from './HeaderNav.module.css';

import {
  HeaderNavMenus,
  MainIconList,
  CategoryButton,
  SearchForm,
  DeliveryBtn,
} from './';

function HeaderNav() {
  const { gyungA, wideContainer, deliveryBtn, mainIcons, searchForm } =
    useScrollEvent();

  return (
    <nav className={styles.headerNav}>
      <h2 className={styles.a11yHidden}>메인 메뉴</h2>
      <div ref={wideContainer} className={styles.wideContainer}>
        <div ref={gyungA} className={styles.headerNavMenu}>
          <CategoryButton />
          <HeaderNavMenus />
          <SearchForm ref={searchForm} />
          <MainIconList ref={mainIcons} />
          <DeliveryBtn ref={deliveryBtn} />
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
