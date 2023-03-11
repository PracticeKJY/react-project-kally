import styles from './Member.module.css'
import headerDown from '../../../../public/assets/icons/Icon/header-down.svg'

export function Member() {
  return (
    <ul className={styles.headerMember}>
      <li>
        <a href="./signUp" className={styles.isActive}>
          회원가입
        </a>
      </li>
      <li>
        <a href="./signIn">로그인</a>
      </li>
      <li>
        <a href="#!">
          고객센터
          <img
            alt=" "
            src={headerDown}
            style={{
              paddingLeft: '10px',
            }}
          />
        </a>
      </li>
    </ul>
  )
}

// export default Member
