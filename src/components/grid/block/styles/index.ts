import styled, { css } from 'styled-components'

export const Container = styled.div`
${({theme}) => css`
  align-items: center;
  border: 1px solid currentColor;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  height: auto;
  justify-content: center;
  transition: ${theme.transition};
  user-select: none;
  width: 60px;
  height: 60px;

  &:before {
    paddin-top: 100%;
    content: '';
    float: left;
  }

  &:hover {
    background: rgba(${theme.primaryColorTintRgb}, 0.2);
  }
`}`
