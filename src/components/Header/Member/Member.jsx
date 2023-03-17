import styles from './Member.module.css';

// import { memberData } from './memberData';

import { MemberList, MemberContainer } from './';

import headerDown from '@/assets/header/ic-down.svg';

import { useAuthState, useSignOut } from '@/firebase/auth';

function Member() {
  const { user } = useAuthState();

  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    console.log('나 작동되고있어요?11');

    signOut();
    console.log('나 작동되고있어요?22');
  };

  console.log(user);

  if (user) {
    // early return <- clean code
    return (
      <MemberContainer>
        <MemberList text="회원가입" href="./signUp" className="styles.signUp" />
        <MemberList text="로그아웃" href="./" onClick={handleSignOut} />
        <MemberList text="고객센터" img="assets/header/ic-down.svg" href="./" />
      </MemberContainer>
    );
  }

  return (
    <MemberContainer>
      <MemberList text="회원가입" href="./signUp" className="styles.signUp" />
      <MemberList text="로그인" href="./signIn" />
      <MemberList text="고객센터" img="assets/header/ic-down.svg" href="./" />
    </MemberContainer>
  );
}

export default Member;
