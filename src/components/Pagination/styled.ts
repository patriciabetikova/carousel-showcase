import styled from "styled-components/macro"

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  display: flex;

  z-index: 1;
  transform: translateX(-50%);
`

export const StyledDot = styled.div<{
  isActive: boolean
}>`
  background: #999;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0.5rem;
  cursor: pointer;

  ${p =>
    p.isActive &&
    `
    background: #eee;
    box-shadow: 0 0 10px 5px #aaa;
    cursor: default;
    pointer-events: none;
  `}
`
