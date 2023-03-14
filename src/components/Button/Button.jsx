import styles from "./Button.module.scss";

export function Button({
  uiType = 'primary',
  children,
  ...restProps
}) {
  const combinedClassNames = `${styles.button} ${getUiStyle(uiType)}`

  return (
    <button className={combinedClassNames} {...restProps}>{children}</button>
  )
}

function getUiStyle(uiType) {
  let uiStyle;

  switch (uiType) {
    case 'primary':
      uiStyle = styles.primary;
      break;
    case 'secondary':
      uiStyle = styles.secondary;
      break;
    case 'third':
      uiStyle = styles.third;
      break;
  }

  return uiStyle;
}