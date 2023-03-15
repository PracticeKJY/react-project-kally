import { useState, useEffect } from 'react';

import { Footer } from '../../components/Footer/Footer';

import { Mainmodal } from './Mainmodal/Mainmodal';

let renderCount = 1;

function Home() {
  // isModalOpen은 메인모달창이 떠있는 여부를 결정한다
  const [isCheckModalOpen, setCheckModalOpen] = useState(true);

  // 사용자에게 노출되는 DOM을 변형시킬 때 효과적인 useLayoutEffect
  useEffect(() => {
    // console.log('테스트용 로그');

    // getCookie 함수를 통해 'modalClose'라는 쿠키가 있는지 확인한다
    let modalCloseValue = getCookie('modalClose');

    if (modalCloseValue && modalCloseValue?.includes('T')) {
      setCheckModalOpen(false); //리랜더링 감지 (감지 후 비동기 처리 - 바로 리랜더링을 시도하지 않음 ) (모달오픈이라는 상태를 변경한다고해서 리랜더링이 아님)
    }

    console.log('Effect Callback', modalCloseValue); // 2 (T)
  }); //
  console.log(
    renderCount++ === 1 ? 'rendering' : 'reRendering',
    isCheckModalOpen,
    renderCount
  ); // 1. (true) 3. (false)
  //새로고침 != 리랜더링  , 새로고침은 맨처음랜더링 부터 다시시작하는거다

  return (
    <>
      <div>Home</div>
      {isCheckModalOpen ? <Mainmodal setModalOpen={setCheckModalOpen} /> : null}
    </>
  );
}

function getCookie(name) {
  let cookieName = document.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${name}=`)); // modalClose찾기

  if (cookieName) {
    // 쿠키이름에 해당하는 T반환
    return cookieName.split('=').map((v) => decodeURIComponent(v.trim()))[1];
  }
}

export default Home;
