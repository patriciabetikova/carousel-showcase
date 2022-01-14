import React, { FunctionComponent } from "react"
import { ArrowWrapper } from "./styled"

export interface ArrowProps {
  onClick: (e: React.MouseEvent) => void
  left?: boolean
}

export const Arrow: FunctionComponent<ArrowProps> = ({ onClick, left }) => (
  <ArrowWrapper onClick={onClick} left={left}></ArrowWrapper>
)
