import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import Square from './Square';

export interface GridProps {
  length: number;
}

export interface Move {
  x: number;
  y: number;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const GameGrid = ({ length }: GridProps) => {
  const classes = useStyles();
  const turn = React.useRef(true);
  const grids = Array.from({ length }, () => Array.from({ length }, () => React.useRef(0)));
  const gameHistory: React.MutableRefObject<Array<Move>> = React.useRef([]);

  return (
    <div className={classes.root}>
      {grids.map((row, i: number) => (
        <div className={classes.row}>
          {row.map((entry, j: number) => (
            <Square
              length={length}
              x={i}
              y={j}
              grids={grids}
              turn={turn}
              gameHistory={gameHistory}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
