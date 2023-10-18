/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query?: {
      visibility?: Types.Visibility | undefined
      oldest_user_id?: string | undefined
      newest_user_id?: string | undefined
      tags?: string | undefined
      limit?: number | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResWorks
  }
}
