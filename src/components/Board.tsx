import { Game, GameState } from "@asebexen/tacky/dist/types"
import styles from './styles.module.css'
import { BoardCell } from "./BoardCell";

interface BoardProps {
  game: Game;
  onCellClick?: (index: number) => void;
  readOnly?: boolean;
  className?: string
}
export const Board = (props: BoardProps) => {
  const {game, onCellClick, readOnly, className} = props;

  return (
    <div className={className ?? styles.board}>
      {game.board.map((value, index) =>
        <BoardCell
          key={index}
          value={value}
          hoverValue={game.state === GameState.InProgress ? game.currentPlayer : ''}
          index={index}
          isHighlighted={game.winningLine?.includes(index) ?? false}
          onClick={readOnly ? () => {} : () => onCellClick?.(index)}
          readOnly={readOnly}
        />
      )}
    </div>
  )
};