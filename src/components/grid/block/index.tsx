import React, { FC } from 'react';
import { Container } from './styles';

interface IProps {
  colIndex: number;
  rowIndex: number;
}
const Block = ({ colIndex, rowIndex } : IProps) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {rowIndex}-{colIndex}
    </Container>
  )
}

export default Block;
