import { Tile } from "@asebexen/tacky/dist/types";
import styles from './styles.module.css';
import { Board } from "./Board";
import { fromHistory } from "@asebexen/tacky";

interface BoardHistoryProps {
  moveHistory: number[];
  startingPlayer: Tile;
}
export const BoardHistory = (props: BoardHistoryProps) => {
  const {moveHistory, startingPlayer} = props;

  return (
    <div className={styles.boardHistory}>
      {moveHistory.map((_, index) => {
        return (
          <Board key={index} className={styles.miniBoard} game={fromHistory(moveHistory.slice(0,index + 1), startingPlayer).game} readOnly={true} />
        );
      })}
    </div>
  )
}