import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setGrid } from 'stores';
import { Button } from 'components';

interface IProps {};

const NewButton : FC<IProps> = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (window.confirm('Do you want to start over?')) dispatch(setGrid());
  }, [dispatch]);
  return <Button onClick={handleClick}>New Game</Button>
}

export default NewButton;
