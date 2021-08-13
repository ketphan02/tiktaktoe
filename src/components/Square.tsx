import * as React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import { Move } from './GameGrid';

export interface SquareProps {
  length: number;
  x: number;
  y: number;
  grids: Array<Array<React.MutableRefObject<number>>>;
  turn: React.MutableRefObject<boolean>;
  gameHistory: React.MutableRefObject<Array<Move>>;
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
  turn,
  gameHistory,
}: SquareProps) => {
  const classes = useStyles({ length });
  const [colorClass, setColorClass]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState(classes.no);

  const undoMove = () => {
    const popNode = gameHistory.current.pop();
    if (popNode) {
      grids[popNode.x][popNode.y].current = 0;
      popNode.setColor(classes.no);
    }
    turn.current = !turn.current;
  };

  const resetGame = () => {
    while (gameHistory.current.length > 0) {
      undoMove();
    }
    turn.current = true;
  };

  const announceWin = (val : number) => {
    alert(`Player ${val} won!`);
    resetGame();
  };

  const checkWinLose = (val: number) => {
    let countX = 1;
    for (let i = x + 1; i < length && grids[i][y].current === val; i++) ++countX;
    for (let i = x - 1; i >= 0 && grids[i][y].current === val; i--) ++countX;

    let countY = 1;
    for (let i = y + 1; i < length && grids[x][i].current === val; i++) ++countY;
    for (let i = y - 1; i >= 0 && grids[x][i].current === val; i--) ++countY;

    let countDiag1 = 1;
    for (let i = 1; x + i < length && y + i < length && grids[x + i][y + i].current === val; i++) ++countDiag1;
    for (let i = 1; x - i >= 0 && y - i >= 0 && grids[x - i][y - i].current === val; i++) ++countDiag1;

    let countDiag2 = 1;
    for (let i = 1; x + i < length && y - i >= 0 && grids[x + i][y - i].current === val; i++) ++countDiag2;
    for (let i = 1; x - i >= 0 && y + i < length && grids[x - i][y + i].current === val; i++) ++countDiag2;

    if (Math.max(countX, countY, countDiag1, countDiag2) >= 5) {
      announceWin(val);
    }
  };

  const onClickSquare = () => {
    if (grids[x][y].current === 0) {
      if (turn.current) {
        grids[x][y].current = 1;
        setColorClass(classes.blue);
      } else {
        grids[x][y].current = 2;
        setColorClass(classes.red);
      }
      turn.current = !turn.current;
      gameHistory.current.push({ x, y, setColor: setColorClass });
      checkWinLose(turn.current ? 2 : 1);
    }
  };

  return (
    <Paper
      elevation={0}
      className={`${classes.square} ${colorClass}`}
      onClick={onClickSquare}
    />
  );
};

export default Square;
