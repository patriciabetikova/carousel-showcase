import axios, { Method } from "axios"

const request =
  (method: Method) =>
  <T extends unknown>(url: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      return axios({
        method,
        url,
      })
        .then(x => {
          resolve(x.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

export const get = request("get")
