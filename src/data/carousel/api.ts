import { get } from "common/request"
import { Collection, Story } from "types/carousel"

export const carouselRequest = {
  collections: (): Promise<Array<Collection>> =>
    get("https://web-task-api.herokuapp.com/api/v1/collections"),
  stories: (): Promise<Array<Story>> =>
    get("https://web-task-api.herokuapp.com/api/v1/stories"),
}
