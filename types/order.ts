export interface IMakePayFx {
  url: string
  amount: any
  description: string
}

export interface ICheckPayFx {
  url: string
  paymentId: string | null
  userId?: string | null
  courseIds?: any
}

export interface IAddUserToCourseFx {
  userId: number | string
  courseIds: number[] | string[]
}
