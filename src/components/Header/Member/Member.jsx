import styles from './Member.module.css'
import headerDown from '@/assets/icons/Icon/header-down.svg'

export function Member() {
  return (
    <ul className={styles.headerMember}>
      <HeaderMember
        href={'./signUp'}
        className={styles.signUp}
        text={'회원가입'}
      />
      <HeaderMember href={'./signIn'} text={'로그인'} />
      <HeaderMember href={'/'} text={'고객센터'} img={headerDown} />
    </ul>
  )
}

function HeaderMember({ href, className, text, img }) {
  return (
    <li>
      <a href={href} className={className}>
        {text}
        {img === undefined ? null : (
          <img
            alt=" "
            src={img}
            style={{
              paddingLeft: '10px',
            }}
          />
        )}
      </a>
    </li>
  )
}

// Member.propTypes ={
//  className : String,

// }

/* ----------------------------------- --- ---------------------------------- */
//아래의 하드코딩을 컴포넌트화 했음

{
  /* <li>
        <a href="./signUp" className={styles.signUp}>
          회원가입
        </a>
      </li> */
}
{
  /* <li>
        <a href="./signIn">로그인</a>
      </li> */
}

{
  /* <li>
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
      </li> */
}
