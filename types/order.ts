export interface IMakePayFx {
  url: string
  amount: any
  description: string
}

export interface ICheckPayFx {
  url: string
  paymentId: string
}
