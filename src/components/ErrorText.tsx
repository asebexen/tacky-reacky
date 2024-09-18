import { TackyError } from "@asebexen/tacky/dist/types"
import styles from './styles.module.css'

interface ErrorTextProps {
  error: TackyError | null;
}
export const ErrorText = (props: ErrorTextProps) => {
  const {error} = props;
  const TEXT_DEFAULT = 'No errors to report!';
  const TEXT = {
    [TackyError.CellOccupied]: 'That cell is already occupied!',
    [TackyError.GameEnded]: 'The game is already over!',
    [TackyError.PositionOutOfBounds]: 'You clicked on an out-of-bounds cell! (HOW!?)'
  };

  return (
    <div className={styles.errorText}>
      {error ? TEXT[error] : TEXT_DEFAULT}
    </div>
  )
}