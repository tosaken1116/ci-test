/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query?: {
      oldest_user_id?: string | undefined
      newest_user_id?: string | undefined
      limit?: number | undefined
      tags?: string | undefined
      visibility?: Types.Visibility | undefined
    } | undefined

    status: 200
    /** Successful Response */
    resBody: Types.ResWorks
  }
}
