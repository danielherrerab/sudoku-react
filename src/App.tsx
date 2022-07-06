import React, { FC } from "react";
import { Content, Title, Card, Grid } from './components'

const App = () => {
  return (
    <div id="app">
      <Content data-cy="content">
        <Title data-cy="title">
          Sudoku App
        </Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </div>
  )
}

export default App;
