import styles from './HeaderNav.module.css'
import Hamburger from '../../../../public/assets/icons/Icon/header-hamburger.svg'
import { useRef, useEffect } from 'react'
export function HeaderNav() {
  useEffect(() => {
    //1.구독
    const test1 = document.getElementById('1')

    console.log(test1)
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)

      if (window.scrollY > 190) {
        test1.style.cssText = `position:fixed;
      
         padding-bottom:199px;
         justify-content: flex-start;
         top:0;
         
        `
      } else
        test1.style.cssText = `position:relative;
      width:1050px;
      `
    })
  }, [])

  return (
    <nav className={styles.headerNav}>
      <h2 className={styles.a11yHidden}>메인 메뉴</h2>
      <div id="1" className={styles.headerNavMenu}>
        <ul>
          <li className={styles.headerNavMenuItem}>
            <button
              type="button"
              className={styles.headerNavDropdown}
              aria-label="카테고리 열기"
            >
              <img
                src={Hamburger}
                aria-label="메뉴 아이콘"
                className={styles.headerNavHamburger}
              />
              카테고리
            </button>
          </li>
        </ul>
        <ul className={styles.headerNavMenuGroup}>
          <li className={styles.headerNavMenuItem}>
            <button type="button">신상품</button>
          </li>
          <li className={styles.headerNavMenuItem}>
            <button type="button">베스트</button>
          </li>
          <li className={styles.headerNavMenuItem}>
            <button type="button">알뜰쇼핑</button>
          </li>
          <li className={styles.headerNavMenuItem}>
            <button type="button">특가/혜택</button>
          </li>
        </ul>
        <ul>
          <li>
            <button className={styles.deliveryBtn}>
              <span className={styles.isActive}>샛별·낮</span> 배송안내
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
