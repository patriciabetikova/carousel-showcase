import { Arrow } from "components/Arrow"
import { Carousel } from "components/Carousel"
import { Pagination } from "components/Pagination"
import { FunctionComponent } from "react"
import { Image } from "types/carousel"
import { StoriesWrapper, StyledImage } from "./styled"

export type StoriesProps = {
  images: Array<Image> | undefined
}

export const Stories: FunctionComponent<StoriesProps> = ({ images }) => (
  <>
    {images?.length ? (
      <StoriesWrapper>
        <Carousel
          images={images}
          columns={5}
          renderControls={({ next, previous, activeIndex, setActiveIndex }) => (
            <>
              <Arrow left onClick={previous} />
              <Arrow onClick={next} />
              <Pagination
                activeIndex={activeIndex}
                images={images}
                setActiveIndex={setActiveIndex}
              />
            </>
          )}
          renderImage={({ img, isActive }) => (
            <StyledImage
              src={img.url}
              alt={img.name}
              id={img.id}
              isActive={isActive}
            />
          )}
        />
      </StoriesWrapper>
    ) : (
      <div>loading</div>
    )}
  </>
)
