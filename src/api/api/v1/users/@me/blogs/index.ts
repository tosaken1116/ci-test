/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query?: {
      limit?: number | undefined
      page?: number | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.BlogsResponse
  }
}
