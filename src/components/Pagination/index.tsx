import { FunctionComponent } from "react"
import { Image } from "types/carousel"
import { PaginationWrapper, StyledDot } from "./styled"

interface PaginationProps {
  activeIndex: number
  images: Array<Image>
  setActiveIndex: (index: number) => void
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  activeIndex,
  images,
  setActiveIndex,
}) => (
  <PaginationWrapper>
    {images.map((image, i) => (
      <StyledDot
        isActive={image.id === images[activeIndex].id}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </PaginationWrapper>
)
