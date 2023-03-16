import styles from './Member.module.css';

import { memberData } from './memberData';

import { MemberList, MemberContainer } from './';

import headerDown from '@/assets/header/ic-down.svg';

import { useAuthState, useSignOut } from '@/firebase/auth';

function Member() {
  const { user } = useAuthState();

  const { signOut } = useSignOut();

  const handleSignOut = async () => {
    signOut();
  };

  const test1 = memberData.filter(
    (memberData) => !memberData.id.includes('signIn')
  );
  const test2 = memberData.filter(
    (memberData) => !memberData.id.includes('signOut')
  );

  console.log(test1);
  console.log(test2);

  return (
    <MemberContainer>
      {user
        ? test1.map((memberData) => (
            <MemberList
              key={memberData.id}
              text={memberData.text}
              img={memberData.img}
              href={memberData.href}
              className={memberData.className}
            />
          ))
        : test2.map((memberData) => (
            <MemberList
              key={memberData.id}
              text={memberData.text}
              img={memberData.img}
              href={memberData.href}
              className={memberData.className}
            />
          ))}
    </MemberContainer>
  );
}

export default Member;
