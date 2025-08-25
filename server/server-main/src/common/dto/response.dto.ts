export class ResponseDto<T> {
  data: T;
  status: string;
  message: string | string[];
  code: number;

  constructor(data: T, message: string | string[], code: number) {
    this.data = data;
    this.message = message;
    this.code = code;
  }
}