import { Link } from 'react-router-dom';

import styles from './Mainmodal.module.scss';
import { productMainmodalState } from './@recoil/MainmodalState';
import { useRecoilState } from 'recoil';
import { transparentFilterState } from '../../../components/TransparentFilter/@recoil/transparentFilterState';
import { useSetRecoilState } from 'recoil';

export default function Mainmodal() {
  const [isVisible, setIsVisible] = useRecoilState(productMainmodalState);
  const setTransparentFilter = useSetRecoilState(transparentFilterState);

  const closeModal = () => {
    setIsVisible(false);
    setTransparentFilter(false);
  };

  const closeModalDuringToday = () => {
    // 하루 후의 데이터 값 가져오기
    let date = new Date(Date.now() + 86400e3);

    date = date.toUTCString();
    document.cookie = `modalClose=T; expires=${date}`; // 하루뒤에 만료되는 쿠키 생성

    closeModal(); // 창 닫기
  };

  return (
    <>
      <div className={styles.mainModalWrap}>
        <div className={styles.popUpContainer}>
          <div>
            <Link className={styles.popUpBeauty} to="/" />
            <button type="button" onClick={closeModalDuringToday}>
              오늘 하루 안 보기
            </button>
            <button
              className={styles.modalCloseBtn}
              type="button"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}