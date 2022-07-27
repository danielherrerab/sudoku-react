import { FC, Children, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillBlock, moveDown, moveLeft, moveRight, moveUp, setGrid } from 'stores/reducer/gridSlice'
import { INDEX } from 'typings';
import Block from './block';
import { useKeyPress } from 'hooks';  
import { getWorkingGrid } from 'stores';
import { Container, Row } from './styles';

const Grid : FC = () => {
  const dispatch = useDispatch();
  const workingGrid = useSelector(getWorkingGrid);
  const create = useCallback(() => {
    if (workingGrid === undefined) dispatch(setGrid());
  }, [workingGrid, dispatch])
  const arrowDown = useKeyPress('ArrowDown');
  const arrowLeft = useKeyPress('ArrowLeft');
  const arrowRight = useKeyPress('ArrowRight');
  const arrowUp = useKeyPress('ArrowUp');
  const oneKey = useKeyPress('1');
  const twoKey = useKeyPress('2');
  const threeKey = useKeyPress('3');
  const fourKey = useKeyPress('4');
  const fiveKey = useKeyPress('5');
  const sixKey = useKeyPress('6');
  const sevenKey = useKeyPress('7');
  const eightKey = useKeyPress('8');
  const nineKey = useKeyPress('9');
  
  useEffect(() => {
    create();
  }, [create])

  useEffect(() => {
    oneKey && dispatch(fillBlock(1));
    twoKey && dispatch(fillBlock(2));
    threeKey && dispatch(fillBlock(3));
    fourKey && dispatch(fillBlock(4));
    fiveKey && dispatch(fillBlock(5));
    sixKey && dispatch(fillBlock(6));
    sevenKey && dispatch(fillBlock(7));
    eightKey && dispatch(fillBlock(8));
    nineKey && dispatch(fillBlock(9));
    arrowDown && dispatch(moveDown());
    arrowLeft && dispatch(moveLeft());
    arrowRight && dispatch(moveRight());
    arrowUp && dispatch(moveUp());
  }, [
    oneKey,
    twoKey,
    threeKey,
    fourKey,
    fiveKey,
    sixKey,
    sevenKey,
    eightKey,
    nineKey,
    arrowDown,
    arrowLeft,
    arrowRight,
    arrowUp,
    dispatch
  ]);

  return (
    <Container data-yc="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-yc="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX} />
              ))
            )}
          </Row>))
      )}
    </Container>
  )
}

export default Grid;
