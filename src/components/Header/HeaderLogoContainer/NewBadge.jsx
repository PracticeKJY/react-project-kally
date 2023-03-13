import styles from './NewBadge.module.css'
import New from '@/assets/icons/Icon/header-new.svg'

function NewBadge() {
  return (
    <img
      className={styles.newBadge}
      src={New}
      alt="새로 생긴 것을 의미하는 n 모양 이미지"
    />
  )
}

export default NewBadge
