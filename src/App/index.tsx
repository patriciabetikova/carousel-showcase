import { Stories } from "components/Stories"
import { carouselRequest } from "data/carousel/api"
import { useData } from "hooks/useData"
import { Collection, Story } from "types/carousel"
import { Collections } from "../components/Collections"
import { GlobalStyle } from "./GlobalStyle"

export const App = () => {
  const [collections] = useData(() => carouselRequest.collections())
  const [stories] = useData(() => carouselRequest.stories())

  return (
    <>
      <GlobalStyle />
      <div style={{ maxWidth: "1020px", margin: "0 auto" }}>
        <Collections
          images={collections?.map((x: Collection) => ({
            ...x,
            url: x.cover_image_url,
          }))}
        />

        <Stories
          images={stories?.map((x: Story) => ({
            ...x,
            url: x.cover_src,
          }))}
        />
      </div>
    </>
  )
}
