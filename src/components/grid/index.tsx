import React, { FC, Children } from 'react'

import Block from './block'
import { Container, Row } from './styles'

const Grid : FC = () => {
  return (
    <Container data-yc="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-yc="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>))
      )}
    </Container>
  )
}

export default Grid;
