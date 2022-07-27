import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.primaryColorTint};
    border: 2px solid currentColor;
    border-radius: 10px;
    color: ${theme.fontColor};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.2px;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.9;
    padding: 0;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.puzzleColor};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
