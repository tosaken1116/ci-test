/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      visibility?: Types.Visibility | undefined
      limit?: number | undefined
      page?: number | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.BlogsResponse
  }

  post: {
    status: 200
    /** Successful Response */
    resBody: Types.Blog
    reqBody: Types.PostBlog
  }
}
