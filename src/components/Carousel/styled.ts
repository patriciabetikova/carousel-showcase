import styled, { css, keyframes } from "styled-components/macro"

const prev = keyframes`
  to {
    transform: translateX(100%);
  }
`
const next = keyframes`
  to {
    transform: translateX(-100%);
  }
`

export const CarouselWrapper = styled.div<{ ref: any }>`
  position: relative;
  overflow: hidden;
  height: 100%;
`
export const CarouselItem = styled.div<{
  columns: number
  first: boolean
  last: boolean
  animation: any
}>`
  width: calc(100% / ${p => p.columns});
  display: inline-block;
  height: 100%;

  ${p =>
    p.first &&
    css`
      position: absolute;
      top: 0;
      right: 100%;
      z-index: 0;
    `};
  ${p =>
    p.last &&
    css`
      position: absolute;
      top: 0;
      left: 100%;
    `};

  animation-duration: 0.25s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: 0;
  animation-fill-mode: forwards;

  ${p =>
    p.animation === "next" &&
    css`
      animation-name: ${next};
    `};
  ${p =>
    p.animation === "prev" &&
    css`
      animation-name: ${prev};
    `};
`
