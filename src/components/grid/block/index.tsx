import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INDEX } from 'typings';
import { selectBlock } from 'stores/reducer/gridSlice';
import { getChallengeGrid, getSelectedBlock, getWorkingGrid } from 'stores/selectors';

import { Container } from './styles';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}
const Block : FC<IProps> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch();
  const workingGrid = useSelector(getWorkingGrid);
  const challengeGrid = useSelector(getChallengeGrid);
  const selectedBlock = useSelector(getSelectedBlock);

  const handleClick = () => {
    if (selectedBlock && selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex) return;
    dispatch(selectBlock([rowIndex, colIndex]));
  }

  if (workingGrid === undefined) return null;
  if (workingGrid && workingGrid.length === 0) return null;

  return (
    <Container 
      isPuzzel={challengeGrid && challengeGrid[rowIndex][colIndex] !== 0}
      active={selectedBlock && selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex ? true : false}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {workingGrid[rowIndex][colIndex] || ''}
    </Container>
  )
}

export default Block;
