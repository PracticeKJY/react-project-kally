import { useEffect, useRef } from 'react';

export const useScrollEvent = () => {
  const wideContainer = useRef(null);
  const deliveryBtn = useRef(null);
  const mainIcons = useRef(null);
  const searchForm = useRef(null);
  const gyungA = useRef(null);

  useEffect(() => {
    //getElementById를 이용하여 특정elem를 target하는 방법도 사용해보고 싶었다.
    //이 외의 나머지 대부분 방식은 useRef를 사용했다.
    const test1 = document.getElementsByName('1');

    const listener = () => {
      let isAllElementFound =
        deliveryBtn.current &&
        mainIcons.current &&
        searchForm.current &&
        wideContainer.current &&
        gyungA.current;

      if (window.scrollY > 190 && isAllElementFound) {
        wideContainer.current.style.cssText = `position:fixed;
        z-index:100;
        width:100%;
        height:66.39px;
        top:0;
        transform: translateX(-50%);
        left: 50%;

        box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
       `;

        gyungA.current.style.cssText = `
        position:fixed;
        z-index:101;
        left: 50%;
        transform: translateX( -50% );
        width:1050px;
        
        
        `;
        deliveryBtn.current.style = `display:none`;
        mainIcons.current.style = `display:block`;
        searchForm.current.style = `display:block`;
      }
      if (window.scrollY < 190 && isAllElementFound) {
        deliveryBtn.current.style = `display:block`;
        mainIcons.current.style = `display:none`;
        searchForm.current.style = `display:none`;

        gyungA.current.style.cssText = `position:relative;
          width:1050px;
          `;

        wideContainer.current.style = `;
          width:100%;
          `;
      }
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [deliveryBtn, gyungA, wideContainer, mainIcons, searchForm]);

  return {
    wideContainer,
    gyungA,
    deliveryBtn,
    mainIcons,
    searchForm,
  };
};
