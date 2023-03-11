import styles from './HeaderIcons.module.css'
// import Location from '../../../../public/assets/icons/Icon/header-location.svg'
import Location from '@/assets/icons/Icon/header-location.svg'
import Heart from '../../../../public/assets/icons/Icon/header-heart.svg'
import Cart from '@/assets/icons/Icon/header-Cart.svg'

export function HeaderIcon() {
  return (
    <div className={styles.mainIcons}>
      <a href="/">
        <img src={Location} alt="" />
      </a>

      <a href="/">
        <img src={Heart} alt="" />
      </a>

      <a href="/">
        <img src={Cart} alt="" />
      </a>
    </div>
  )
}
