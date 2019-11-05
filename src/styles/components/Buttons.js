import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 1rem;
    font-size: 0.5rem;
  `,
  default: css`
    height: 1.2rem;
    font-size: 1rem;
  `,
  big: css`
    height: 1.5 * 1.2rem;
    font-size: 1.5rem;
  `
};

const colors = {
  default: css`
    background: #7289da;
    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;
    &:hover {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;
    &:hover {
      background: #999;
    }
  `
};

const Button = styled.button.attrs({})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  padding: 0 10px;
  margin:1rem 0 0 0;
  font-weight: 400;

  ${props => sizes[props.sizes || "default"]}
  ${props => colors[props.color || "default"]}

  ${props =>
    props.filled === false &&
    css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
  ${props =>
    props.link === true &&
    css`
      font-weight: 100;
      text-transform: none;
      background: none;
      color: #000;
      border: none;
      &:hover {
        background: none;
        border: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
