# Showcase app for Carousel component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run locally

1. Clone the repository
2. Run in terminal:

```
npm install
npm start
```

## How to use Carousel

Carousel allows infinite display of images

Component Carousel is a headless component that takes:

- array of `images`, where type of image is

```
{
  url: string,
  id: string,
  name: string,
}
```

- `columns` representing number of images being displayed on screen at a time, 1 being a default value
- `renderControls` that allows for complete customization of arrows and pagination. Its a function that that returns react elements and as a parameter gets :
  1. `next`: function that increments active index
  2. `previous`: function that decrements active index
  3. `activeIndex`: index of active image
  4. `setActiveIndex`: function for setting active index
- `renderImage` function that allows style customization of displayed images, returns react element and as a parameter gets:

  1. `image`: each image
  2. `isActive`: boolean representeing if image is the one currently active

## Example

```JSX
import { Carousel } from "Carousel"

const Example = () => (
  <Carousel
    images={images}
    columns={2}
    renderControls={({ next, previous, activeIndex, setActiveIndex }) => (
      <>
        <CustomArrow left onClick={previous}/>
        <CustomArrow onClick={next} />
        <CustomPagination
          activeIndex={activeIndex}
          images={images}
          setActiveIndex={setActiveIndex}
          />
      </>
    )}
    renderImage={({ img }) => (
      <CustomImage src={img.url} alt={img.name} id={img.id} />
    )}
  />
)

```
