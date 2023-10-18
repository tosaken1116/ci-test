/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.Work
  }

  put: {
    status: 200
    /** Successful Response */
    resBody: Types.Work
    reqBody: Types.PostWork
  }

  delete: {
    status: 200
    /** Successful Response */
    resBody: Types.DeleteStatus
  }
}
