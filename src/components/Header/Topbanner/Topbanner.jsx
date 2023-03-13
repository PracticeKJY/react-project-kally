import styles from './Topbanner.module.css'
import close from '@/assets/icons/Icon/icon-close.svg'
import { useEffect, useRef } from 'react'

export function Topbanner() {
  const test01 = useRef()

  const buttonTest = () => {
    return (test01.current.hidden = true)
  }

  return (
    <>
      <div ref={test01} className={styles.topbanner}>
        <div className={styles.textcontainer}>
          <a href="/">
            지금 가입하고 인기상품 <span className={styles.boldtext}>100</span>
            원에 받아가세요
          </a>
          <button
            type="button"
            onClick={buttonTest}
            className={styles.testbutton}
          >
            <img src={close} alt="닫기버튼" />
          </button>
        </div>
      </div>
    </>
  )
}

//지금동작 = useRef를 사용해 ref를 참조하고,
// 그것을 버튼에게 클릭했을 시, hidden되도록 클릭이벤트를 줌

// 버튼에 id를 임의로 주고 그것을 useEffect로 이벤트핸들러를 걸어봄
// useEffect(() => {
//   const test001 = document.getElementById('2')

//   test001.addEventListener('click', () => {
//     test01.current.hidden = `true`
//   })

// }, [])
