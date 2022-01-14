import { Arrow } from "components/Arrow"
import { Carousel } from "components/Carousel"
import { Pagination } from "components/Pagination"
import { FunctionComponent } from "react"
import { Image } from "types/carousel"
import { CollectionsWrapper, StyledImageWrapper, StyledImage } from "./styled"

export type CollectionsProps = {
  images: Array<Image> | undefined
}

export const Collections: FunctionComponent<CollectionsProps> = ({
  images,
}) => (
  <>
    {images?.length ? (
      <CollectionsWrapper>
        <Carousel
          images={images}
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
          renderImage={({ img }) => (
            <StyledImageWrapper>
              <StyledImage src={img.url} alt={img.name} id={img.id} />
            </StyledImageWrapper>
          )}
        />
      </CollectionsWrapper>
    ) : (
      <div>... loading</div>
    )}
  </>
)
