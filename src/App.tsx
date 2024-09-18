import { useState } from 'react';
import { init, makeMove } from '@asebexen/tacky';
import { Board } from './components/Board';
import styles from './styles.module.css';
import { TackyError } from '@asebexen/tacky/dist/types';
import { ErrorText } from './components/ErrorText';
import { Controls } from './components/Controls';
import { BoardHistory } from './components/BoardHistory';

export const App = () => {
  const [game, setGame] = useState(init());
  const [error, setError] = useState<TackyError | null>(null);

  const onCellClick = (index: number) => {
    const {game: updatedGame, error: updatedError} = makeMove(game, index);
    setGame(updatedGame);
    setError(updatedError);
  }

  const resetGame = () => {
    setGame(init());
    setError(null);
  }

  return (
    <div className={styles.app}>
      <h1>Tacky Reacky</h1>
      <Board game={game} onCellClick={onCellClick} />
      <ErrorText error={error} />
      <Controls onReset={() => resetGame()} />
      <BoardHistory moveHistory={game.moveHistory} startingPlayer={game.startingPlayer} />
    </div>
  );
}
