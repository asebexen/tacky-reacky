import styles from './styles.module.css';

interface ControlsProps {
  onReset: () => void;
}
export const Controls = (props: ControlsProps) => {
  const {onReset} = props;

  return (
    <div className={styles.controls}>
      <button className={styles.resetButton} onClick={onReset}>Reset</button>
    </div>
  )
}