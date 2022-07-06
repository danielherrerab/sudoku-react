import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  &:nth-child(1) {
    div {
      border-top-width: 4px;
    }
  }
  &:nth-child(3),
  &:nth-child(6) {
    div {
      border-bottom-width: 3px;
    }
  }
  &:nth-child(9) {
    div {
      border-bottom-width: 4px;
    }
  }

  div {
    &:nth-child(1) {
      border-left-width: 4px;
    }
    &:nth-child(3),
    &:nth-child(6) {
      border-right-width: 3px;
    }
    &:nth-child(9) {
      border-right-width: 4px;
    }
  }
`
