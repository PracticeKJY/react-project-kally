import styles from './Member.module.css'
import { MemberList, MemberContainer } from './'
import headerDown from '@/assets/icons/Icon/header-down.svg'

function Member() {
  return (
    <>
      <MemberContainer>
        <MemberList
          href={'./signUp'}
          className={styles.signUp}
          text={'회원가입'}
        />
        <MemberList href={'./signIn'} text={'로그인'} />
        <MemberList href={'/'} text={'고객센터'} img={headerDown} />
      </MemberContainer>
    </>
  )
}

export default Member

/* ----------------------------------- --- ---------------------------------- */
//아래의 하드코딩을 컴포넌트화 했음

{
  {
    /* // <ul className={styles.headerMember}> */
  }
  {
    /* </ul> */
  }
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
