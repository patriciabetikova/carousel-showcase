import styled, { css } from "styled-components/macro"
import { ArrowProps } from "."

export const ArrowWrapper = styled.button<ArrowProps>`
  position: absolute;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  border: none;

  ${p =>
    p.left
      ? css`
          left: 2rem;
        `
      : css`
          left: initial;
          right: 2rem;
        `}

  top: calc(50% - 2.5rem);
  backdrop-filter: blur(15px);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3), 0px 3px 14px rgba(0, 0, 0, 0.3),
      0px 5px 5px rgba(0, 0, 0, 0.3);
    display: flex;
  }

  ::after {
    content: "➤";
    width: 2rem;
    height: 1.6rem;
    text-align: center;

    ${p => p.left && "transform: rotate(180deg)"}
  }
`
