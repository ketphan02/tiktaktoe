import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import Square from './Square';

export interface GridProps {
  length: number;
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
  const [grids, setGrids]: [
    Array<Array<number>>,
    React.Dispatch<React.SetStateAction<Array<Array<number>>>>,
  ] = React.useState(
    Array.from({ length }, () => Array.from({ length }, () => 0)),
  );

  return (
    <div className={classes.root}>
      {grids.map((row: Array<number>, i: number) => (
        <div className={classes.row}>
          {row.map((entry: number, j: number) => (
            <Square
              length={length}
              x={i}
              y={j}
              grids={grids}
              setGrids={setGrids}
              turn={turn}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
