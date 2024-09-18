import { GameState, Tile } from "@asebexen/tacky/dist/types"
import styles from './styles.module.css';

const OutcomeDisplay = (winner: Tile | null) => winner ? <p>{winner} wins!</p> : <p>Tie!</p>

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