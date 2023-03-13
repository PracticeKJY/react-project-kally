import { Link } from 'react-router-dom'
import styles from './HeaderIcons.module.css'
import { MainIcon } from './'
import Location from '@/assets/icons/Icon/header-location.svg'
import Heart from '@/assets/icons/Icon/header-heart.svg'
import Cart from '@/assets/icons/Icon/header-Cart.svg'

function IconsContainer({ children }) {
  return <div className={styles.iconsContainer}>{children}</div>
}

const HeaderIcon = () => {
  return (
    <IconsContainer>
      <MainIcon href={'/'} img={Location} alt={'위치이미지'} />
      <MainIcon href={'/'} img={Heart} alt={'찜하기이미지'} />
      <MainIcon href={'/'} img={Cart} alt={'장바구니이미지'} />
    </IconsContainer>
  )
}

export default HeaderIcon

// 아래와같은 하드코딩을 ,MainIcon이란 이름의 컴포넌트로 나눔
{
  /* <a href="/">
        <img src={Location} alt="" />
      </a> */
}
{
  /* <a href="/">
        <img src={Heart} alt="" />
      </a> */
}
{
  /* <a href="/Cart">
        <img src={Cart} alt="" />
      </a> */
}
