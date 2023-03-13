import styles from './HeaderNav.module.css'
import Location from '@/assets/icons/Icon/header-location.svg'
import Heart from '@/assets/icons/Icon/header-heart.svg'
import Cart from '@/assets/icons/Icon/header-Cart.svg'
import Hamburger from '@/assets/icons/Icon/header-hamburger.svg'
import Search from '@/assets/icons/Icon/header-search.svg'
import { useState, useRef, useEffect } from 'react'
import { MainIcon } from '../HeaderIcon/HeaderIcon'
import { useCallback } from 'react'

function CategoryData({ href, title, img, alt }) {
  return (
    <li>
      <a href={href}>
        <img src={img} alt={alt} />
        {title}
      </a>
    </li>
  )
}

export function HeaderNav() {
  const testBorder = useRef(null)
  const deliveryBtn = useRef(null)
  const mainIcons = useRef(null)
  const searchForm = useRef(null)
  // const subtest = useRef()
  const [isHover, setIsHover] = useState(false)

  const hovertest = () => {
    setIsHover(!isHover)
  }

  const categoryData = [
    {
      id: 1,
      title: '선물하기',
      imgSrc: Heart,
    },
    { id: 2, title: '채소', imgSrc: Heart },
    {
      id: 3,
      title: '과일ㆍ견과ㆍ쌀',
      imgSrc: Heart,
    },
    {
      id: 4,
      title: '수산ㆍ해산ㆍ건어물',
      imgSrc: Heart,
    },
    {
      id: 5,
      title: '정육ㆍ계란',
      imgSrc: Heart,
    },
    {
      id: 6,
      title: '국ㆍ반찬ㆍ메인요리',
      imgSrc: Heart,
    },
    {
      id: 7,
      title: '샐러드ㆍ간편식',
      imgSrc: Heart,
    },
    {
      id: 8,
      title: '면ㆍ양념ㆍ오일',
      imgSrc: Heart,
    },
    {
      id: 9,
      title: '생수ㆍ음료ㆍ우유ㆍ커피',
      imgSrc: Heart,
    },
    {
      id: 10,
      title: '간식ㆍ과자ㆍ떡',
      imgSrc: Heart,
    },
    {
      id: 11,
      title: '베이커리ㆍ치즈ㆍ델리',
      imgSrc: Heart,
    },
    {
      id: 12,
      title: '건강식품',
      imgSrc: Heart,
    },
    { id: 13, title: '와인', imgSrc: Heart },
    { id: 14, title: '전통주', imgSrc: Heart },
    {
      id: 15,
      title: '생활용품ㆍ리빙ㆍ캠핑',
      imgSrc: Heart,
    },
    {
      id: 16,
      title: '스킨케어ㆍ메이크업',
      imgSrc: Heart,
    },
    {
      id: 17,
      title: '헤어ㆍ바디ㆍ구강',
      imgSrc: Heart,
    },
    {
      id: 18,
      title: '주방용품',
      imgSrc: Heart,
    },
    {
      id: 19,
      title: '가전제품',
      imgSrc: Heart,
    },
    {
      id: 20,
      title: '반려동물',
      imgSrc: Heart,
    },
    {
      id: 21,
      title: '베이비ㆍ키즈ㆍ완구',
      imgSrc: Heart,
    },
    {
      id: 22,
      title: '여행ㆍ티켓',
      imgSrc: 'assets/icons/Icon/header-heart.svg',
    },
  ]

  // const categoryData = [
  //   { title: '선물하기', imgSrc: 'assets/header/ic-gift.svg' },
  //   { title: '채소', imgSrc: 'assets/header/ic-vegetable.svg' },
  //   { title: '과일ㆍ견과ㆍ쌀', imgSrc: 'assets/header/ic-fruit.svg' },
  //   { title: '수산ㆍ해산ㆍ건어물', imgSrc: 'assets/header/ic-sea-food.svg' },
  //   { title: '정육ㆍ계란', imgSrc: 'assets/header/ic-meet.svg' },
  //   { title: '국ㆍ반찬ㆍ메인요리', imgSrc: 'assets/header/ic-cook.svg' },
  //   { title: '샐러드ㆍ간편식', imgSrc: 'assets/header/ic-salad.svg' },
  //   { title: '면ㆍ양념ㆍ오일', imgSrc: 'assets/header/ic-oil.svg' },
  //   { title: '생수ㆍ음료ㆍ우유ㆍ커피', imgSrc: 'assets/header/ic-coffee.svg' },
  //   { title: '간식ㆍ과자ㆍ떡', imgSrc: 'assets/header/ic-snack.svg' },
  //   { title: '베이커리ㆍ치즈ㆍ델리', imgSrc: 'assets/header/ic-bread.svg' },
  //   { title: '건강식품', imgSrc: 'assets/header/ic-health.svg' },
  //   { title: '와인', imgSrc: 'assets/header/ic-wine.svg' },
  //   { title: '전통주', imgSrc: 'assets/header/ic-traditional-liquor.svg' },
  //   { title: '생활용품ㆍ리빙ㆍ캠핑', imgSrc: 'assets/header/ic-detergent.svg' },
  //   { title: '스킨케어ㆍ메이크업', imgSrc: 'assets/header/ic-cosmetics.svg' },
  //   { title: '헤어ㆍ바디ㆍ구강', imgSrc: 'assets/header/ic-shampoo.svg' },
  //   { title: '주방용품', imgSrc: 'assets/header/ic-food.svg' },
  //   { title: '가전제품', imgSrc: 'assets/header/ic-home-appliances.svg' },
  //   { title: '반려동물', imgSrc: 'assets/header/ic-dog.svg' },
  //   { title: '베이비ㆍ키즈ㆍ완구', imgSrc: 'assets/header/ic-baby.svg' },
  //   { title: '여행ㆍ티켓', imgSrc: 'assets/header/ic-travel.svg' },
  // ]

  useEffect(() => {
    //1.구독
    const test1 = document.getElementById('1')

    window.addEventListener('scroll', () => {
      if (window.scrollY > 190) {
        deliveryBtn.current.style = `display:none`
        mainIcons.current.style = `display:block`
        searchForm.current.style = `display:block`

        testBorder.current.style = `position:fixed;
        left: 50%;
        width:100%;
        height:60px;
        top:0;
        transform: translateX(-50%);
        box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
       `

        test1.style.cssText = `
        position:fixed;
        left: 50%;
        transform: translateX( -50% );
        width:1050px;
         top:0;
         
        `
      } else {
        deliveryBtn.current.style = `display:block`
        mainIcons.current.style = `display:none`
        searchForm.current.style = `display:none`
        testBorder.current.style = `;
      width:100%;
      `
        test1.style.cssText = `position:relative;
      width:1050px;
        `
      }
    })
  }, [])

  //2.해제
  window.removeEventListener(
    'scroll',
    () => {
      if (window.scrollY > 190) {
        deliveryBtn.current.style = `display:none`
        mainIcons.current.style = `display:block`
        searchForm.current.style = `display:block`

        testBorder.current.style = `position:fixed;
        left: 50%;
        width:100%;
        height:60px;
        top:0;
        transform: translateX(-50%);
        box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
       `
      } else {
        deliveryBtn.current.style = `display:block`
        mainIcons.current.style = `display:none`
        searchForm.current.style = `display:none`
        testBorder.current.style = `;
      width:100%;
      `
      }
    },
    []
  )

  return (
    <nav className={styles.headerNav}>
      <h2 className={styles.a11yHidden}>메인 메뉴</h2>
      <div ref={testBorder} className={styles.testBorder}>
        <div id="1" className={styles.headerNavMenu}>
          <ul>
            <li className={styles.headerNavProductList}>
              <button
                type="button"
                className={styles.headerNavDropdown}
                aria-label="카테고리 열기"
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                onFocus={() => setIsHover(true)}
                onBlur={() => setIsHover(false)}
              >
                <img
                  src={Hamburger}
                  aria-label="메뉴 아이콘"
                  className={styles.headerNavHamburger}
                />
                카테고리
                <ul
                  className={styles.NavSubMenu}
                  // onMouseOut={() => setIsHover(false)}
                  // onBlur={() => setIsHover(false)}
                >
                  {categoryData.map(
                    (categoryData) =>
                      isHover && (
                        <CategoryData
                          key={categoryData.id}
                          title={categoryData.title}
                          img={categoryData.imgSrc}
                        />
                      )
                  )}
                </ul>
              </button>
            </li>
          </ul>

          <ul className={styles.headerNavMenuGroup}>
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              type={'button'}
              text={'신상품'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              type={'button'}
              text={'베스트'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              type={'button'}
              text={'알뜰쇼핑'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              type={'button'}
              text={'특가/혜택'}
            />
          </ul>

          <div ref={searchForm} style={{ display: 'none' }}>
            <h2 className={styles.a11yHidden}>검색</h2>
            <form
              ref={searchForm}
              action="#"
              method="post"
              className={styles.searchForm}
            >
              <div className={styles.searchFormInner}>
                <div className={styles.formGroup}>
                  <label htmlFor="search" className={styles.formGroupLabel} />
                  <input
                    type="search"
                    id="search"
                    className={styles.formGroupInput}
                    placeholder="검색어를 입력해주세요"
                    required={true}
                  />
                </div>
                <button type="submit" className={styles.formGroupButton}>
                  <img src={Search} alt="검색하기" />
                </button>
              </div>
            </form>
          </div>

          <div ref={mainIcons} style={{ display: 'none' }}>
            <div className={styles.mainIcons}>
              <MainIcon href={'/'} img={Location} alt={'위치이미지'} />
              <MainIcon href={'/'} img={Heart} alt={'찜하기이미지'} />
              <MainIcon href={'/'} img={Cart} alt={'장바구니이미지'} />
            </div>
          </div>

          <ul ref={deliveryBtn}>
            <li>
              <button className={styles.deliveryBtn}>
                <span className={styles.deliveryBtnText}>샛별·낮</span> 배송안내
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function HeaderNavMenu({ className, type, text }) {
  return (
    <li className={className}>
      <button type={type}>{text}</button>
    </li>
  )
}

function useOnHoverOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mouseover', listener)

    return () => {
      document.removeEventListener('mouseout', listener)
    }
  }, [ref, handler])
}

/* ------------------------------- ----------- ------------------------------ */
//아래와같은 li 리스트들을 HeaderNavMenu로 컴포넌트화 함
{
  /* <li className={styles.headerNavMenuItem}>
            <button type="button">신상품</button>
            </li> */
}
{
  /* <li className={styles.headerNavMenuItem}>
              <button type="button">베스트</button>
            </li>
            <li className={styles.headerNavMenuItem}>
              <button type="button">알뜰쇼핑</button>
            </li>
            <li className={styles.headerNavMenuItem}>
              <button type="button">특가/혜택</button>
            </li> */
}
