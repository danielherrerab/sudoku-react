import { Content, Title, Card, Grid, Numbers, NewBtton } from './components'

const App = () => {
  return (
    <div id="app">
      <Content data-cy="content">
        <Title data-cy="title">
          Sudoku App
        </Title>
        <Card data-cy="card">
          <NewBtton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </div>
  )
}

export default App;
