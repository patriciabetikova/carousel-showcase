import styled, { css } from "styled-components/macro"

export const StoriesWrapper = styled.div<{}>`
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
`

export const StyledImage = styled.img<{ isActive: boolean }>`
  width: 20rem;
  height: 20rem;
  border-radius: 2rem;
  margin: 0 auto;
  object-fit: cover;
  flex-shrink: 0;

  ${p =>
    p.isActive &&
    css`
      box-shadow: 0 0px 5px 2px #aaa;
      z-index: 2;
    `}
`
