import React, { FunctionComponent, ReactElement, useRef, useState } from "react"
import { Image } from "types/carousel"
import { getImages, getNextIndex, getPreviousIndex } from "./helpers"
import { CarouselItem, CarouselWrapper } from "./styled"

interface CarouselProps {
  images: Array<Image>
  columns?: number
  renderControls: (props: {
    next: () => void
    previous: () => void
    activeIndex: number
    setActiveIndex: (index: number) => void
  }) => ReactElement
  renderImage: (props: { img: Image; isActive: boolean }) => ReactElement
}

export const Carousel: FunctionComponent<CarouselProps> = ({
  images,
  renderControls,
  renderImage,
  columns = 1,
}) => {
  const carouselRef = useRef<HTMLDivElement>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const [animation, setAnimation] = React.useState<string | undefined>()

  const next = () => {
    setAnimation("next")

    setTimeout(() => {
      setAnimation(undefined)
      setActiveIndex(curIndex => getNextIndex(images, curIndex))
    }, 250)
  }
  const previous = () => {
    setAnimation("prev")

    setTimeout(() => {
      setAnimation(undefined)
      setActiveIndex(curIndex => getPreviousIndex(images, curIndex))
    }, 250)
  }

  return (
    <CarouselWrapper ref={carouselRef} className="carousel">
      {getImages(images, columns, activeIndex).map((img, i, arr) => (
        <CarouselItem
          animation={animation}
          key={img.id}
          columns={columns}
          first={i === 0}
          last={i === arr.length - 1}
        >
          {renderImage({ img, isActive: images[activeIndex].id === img.id })}
        </CarouselItem>
      ))}
      {renderControls({ next, previous, activeIndex, setActiveIndex })}
    </CarouselWrapper>
  )
}
