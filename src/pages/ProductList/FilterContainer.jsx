import styles from './FilterContainer.module.css';

export const FilterContainer = ({ onClick }) => {
  return (
    <div className={styles.productListNavFilter}>
      <span className={styles.navFillterText}>필터</span>
      <button
        type="button"
        onClick={onClick}
        className={styles.navFilterButton}
      >
        초기화
      </button>
    </div>
  );
};