import { useRef } from 'react'
import styles from './Topbanner.module.css'
import { TopbannerCloseButton, TopbannerText } from './'
import close from '@/assets/icons/Icon/icon-close.svg'

function Topbanner() {
  const topBannerContainer = useRef(null)

  const bannerDisabled = () => {
    return (topBannerContainer.current.hidden = true)
  }

  return (
    <>
      <div ref={topBannerContainer} className={styles.topBanner}>
        <div className={styles.textContainer}>
          <TopbannerText />
          <TopbannerCloseButton
            type={'button'}
            className={styles.topBannerButton}
            img={close}
            alt={'닫기버튼'}
            handler={bannerDisabled}
          />
        </div>
      </div>
    </>
  )
}

export default Topbanner

//지금동작 = useRef를 사용해 ref를 참조하고,
// 그것을 버튼에게 클릭했을 시, hidden되도록 클릭이벤트를 줌

// 버튼에 id를 임의로 주고 그것을 useEffect로 이벤트핸들러를 걸어봄
// useEffect(() => {
//   const test001 = document.getElementById('2')

//   test001.addEventListener('click', () => {
//     test01.current.hidden = `true`
//   })

// }, [])

//버튼 컴포넌트로 분리 (관심사의 분리)
{
  /* <button
              type="button"
              className={styles.testbutton}
              onClick={buttonTest}
            >
              <img src={close} alt="닫기버튼" />
            </button> */
}
