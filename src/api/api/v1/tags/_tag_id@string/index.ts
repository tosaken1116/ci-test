/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Successful Response */
    resBody: Types.GetTag
  }

  put: {
    status: 200
    /** Successful Response */
    resBody: Types.GetTag
    reqBody: Types.PutTag
  }

  delete: {
    status: 200
    /** Successful Response */
    resBody: Types.TagResponsStatus
  }
}
