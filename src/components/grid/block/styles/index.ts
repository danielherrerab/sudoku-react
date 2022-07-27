import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean,
  isPuzzel?: boolean
}
export const Container = styled.div<IProps>`
${({ active, isPuzzel, theme}) => css`
  align-items: center;
  background-color: ${active ? theme.primaryColor : 'transparent'};
  border: 1px solid ${ theme.fontColor };
  color: ${isPuzzel ? theme.puzzleColor : theme.fontColor };
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  font-weight: ${isPuzzel ? 700 : 400 };
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
