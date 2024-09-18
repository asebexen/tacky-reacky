import { Cell, Tile } from "@asebexen/tacky/dist/types";
import styles from './styles.module.css';
import { useState } from "react";

const getBorderStyle = (index: number): {borderRight: string | undefined, borderBottom: string | undefined} => {
  const BORDER_STYLE = '2px solid white';
  const hasRight = index % 3 !== 2;
  const hasBottom = index < 6;
  return {
    borderRight: hasRight ? BORDER_STYLE : undefined,
    borderBottom: hasBottom ? BORDER_STYLE : undefined
  };
}

interface BoardCellProps {
  value: Cell;
  hoverValue: Tile | '';
  index: number;
  isHighlighted: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  readOnly?: boolean;
}
export const BoardCell = (props: BoardCellProps) => {
  const {value, hoverValue, index, isHighlighted, onClick, readOnly} = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const rgb = isHighlighted ? '205, 94, 242' : '255, 255, 255';
  const textOpacity = (() => {
    if (value !== null) return 1.0;
    else if (isHovered) return 0.5;
    else return 0;
  })();
  const color = `rgba(${rgb}, ${textOpacity}`;
  
  const divStyle: React.CSSProperties = {...getBorderStyle(index), color};

  const text = (() => {
    if (value) return value;
    else if (isHovered) return hoverValue;
    else return '';
  })();

  return (
    <div
      className={styles.cell}
      style={divStyle}
      onMouseEnter={readOnly ? () => {} : () => setIsHovered(true)}
      onMouseLeave={readOnly ? () => {} : () => setIsHovered(false)}
      onClick={readOnly ? () => {} : onClick}
    >
      {text}
    </div>
  );
}