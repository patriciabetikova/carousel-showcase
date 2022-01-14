import { Image } from "types/carousel"

export const getPreviousIndex = (images: Array<Image>, activeIndex: number) => {
  if (activeIndex === 0) return images.length - 1
  return activeIndex - 1
}

export const getNextIndex = (images: Array<Image>, activeIndex: number) => {
  if (activeIndex === images.length - 1) return 0
  return activeIndex + 1
}

const sliceWithOverflow = (arr: Array<Image>, from: number, to: number) => {
  if (from >= 0 && to >= arr.length) {
    return arr.slice(from).concat(arr.slice(0, to + 1 - arr.length))
  }

  if (from >= 0) return arr.slice(from, to + 1)

  const end = arr.slice(from)
  const beggining = arr.slice(0, to + 1)
  const result = end.concat(beggining)

  return result
}

export const getImages = (
  images: Array<Image>,
  columns: number,
  activeIndex: number,
) => {
  // we need to get COLUMNS images +1 before and +1 after for transitions
  // follows example for activeIndex = 1
  // we center the activeImage so with columns = 3, we get img with indices -2, -1, 0, 1, 2
  // for even columns, we align to the right, so for columns = 4 we get -2, -1, 0, 1, 2, 3, so the active index is in the center on the more left side

  const lowerBound = activeIndex - Math.round(columns / 2)
  const upperBound =
    activeIndex + Math.round(columns / 2) + (columns % 2 === 0 ? 1 : 0)

  const sliced = sliceWithOverflow(images, lowerBound, upperBound)
  return sliced
}
