import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

export interface SquareProps {
  length: number;
  x: number;
  y: number;
  grids: Array<Array<number>>;
  setGrids: React.Dispatch<React.SetStateAction<Array<Array<number>>>>;
  turn: React.MutableRefObject<boolean>;
}

interface SquareStyle {
  length: number;
}

const useStyles = makeStyles((theme) => ({
  square: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '0.2px',
    margin: ({ length }: SquareStyle) => window.innerHeight / (length * 20),
    width: ({ length }: SquareStyle) => window.innerHeight / (length * 1.3),
    height: ({ length }: SquareStyle) => window.innerHeight / (length * 1.3),
  },
  blue: {
    backgroundColor: theme.palette.primary.main,
  },
  red: {
    backgroundColor: theme.palette.secondary.main,
  },
  no: {
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
    },
  },
}));

const Square: React.FC<SquareProps> = ({
  length,
  x,
  y,
  grids,
  setGrids,
  turn,
}: SquareProps) => {
  const classes = useStyles({ length });
  const state = grids[x][y];

  const resetGame = () => {
    setGrids(Array.from({ length }, () => Array.from({ length }, () => 0)));
    turn.current = true;
  };

  const announceWin = (val : number) => {
    alert(`Player ${val} won!`);
    resetGame();
  };

  const checkWinLose = (val: number) => {
    let countX = 1;
    for (let i = x + 1; i < length && grids[i][y] === val; i++) ++countX;
    for (let i = x - 1; i >= 0 && grids[i][y] === val; i--) ++countX;

    let countY = 1;
    for (let i = y + 1; i < length && grids[x][i] === val; i++) ++countY;
    for (let i = y - 1; i >= 0 && grids[x][i] === val; i--) ++countY;

    let countDiag1 = 1;
    for (let i = 1; x + i < length && y + i < length && grids[x + i][y + i] === val; i++) ++countDiag1;
    for (let i = 1; x - i >= 0 && y - i >= 0 && grids[x - i][y - i] === val; i++) ++countDiag1;

    let countDiag2 = 1;
    for (let i = 1; x + i < length && y - i >= 0 && grids[x + i][y - i] === val; i++) ++countDiag2;
    for (let i = 1; x - i >= 0 && y + i < length && grids[x - i][y + i] === val; i++) ++countDiag2;

    if (Math.max(countX, countY, countDiag1, countDiag2) >= 5) {
      announceWin(val);
    }
  };

  const onClickSquare = () => {
    if (grids[x][y] === 0) {
      if (turn.current) {
        const arr = [...grids];
        arr[x][y] = 1;
        setGrids(arr);
        turn.current = false;
      } else {
        const arr = [...grids];
        arr[x][y] = 2;
        setGrids(arr);
        turn.current = true;
      }
      checkWinLose(turn.current ? 2 : 1);
    }
  };
  const colorClass = () => {
    if (state === 1) return classes.blue;
    if (state === 2) return classes.red;
    return classes.no;
  };

  return (
    <Paper
      elevation={0}
      className={`${classes.square} ${colorClass()}`}
      onClick={onClickSquare}
    />
  );
};

export default Square;
