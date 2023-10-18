/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      limit?: number | undefined
      smallest_tag_id?: string | undefined
      biggest_tag_id?: string | undefined
      w?: string | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.GetTag[]
  }

  post: {
    status: 200
    /** Successful Response */
    resBody: Types.GetTag
    reqBody: Types.PostTag
  }
}
