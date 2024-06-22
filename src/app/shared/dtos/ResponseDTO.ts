export class ResponseDTO<T> {
  constructor(
      public success: boolean,
      public message: string,
      public data?: T
  ) {}
}