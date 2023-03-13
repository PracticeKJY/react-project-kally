import styles from './SearchInput.module.css'
import Search from '@/assets/icons/Icon/header-search.svg'

export function SearchInput() {
  return (
    <>
      <h2 className={styles.a11yHidden}>검색</h2>
      <form action="#" method="post" className={styles.searchForm}>
        <div className={styles.searchFormInner}>
          <div className={styles.formGroup}>
            <label htmlFor="search" className={styles.formGroupLabel} />
            <input
              type="search"
              id="search"
              className={styles.formGroupInput}
              placeholder="검색어를 입력해주세요"
              required={true}
            />
          </div>
          <button type="submit" className={styles.formGroupButton}>
            <img src={Search} alt="검색하기" />
          </button>
        </div>
      </form>
    </>
  )
}
