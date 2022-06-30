import { Context } from 'koa';

export interface IResponseData<T> {
  message: string;
  data?: T;
  status?: string;
  time?: number;
  code?: number;
}

export class IResponse<T> {
  status?: string;
  message: string;
  data?: T;
  time: number;
  code?: number;
  constructor({ status, message, data, code }: IResponseData<T>) {
    this.code = code;
    this.status = status;
    this.message = message;
    this.data = data;
    this.time = Math.floor(new Date().getTime() / 1000);
  }
}

// 定义类SuccessResponse ,用于处理成功类型
export class SuccessResponse<T> extends IResponse<T> {
  constructor(options: IResponseData<T>) {
    options.status = 'ok';
    options.code = 200;
    super(options);
  }
}

// 定义类ErrorResponse,用于处理失败类型
export class ErrorResponse<T> extends IResponse<T> {
  constructor(options: IResponseData<T>) {
    options.status = 'error';
    super(options);
  }
}

export default class {
  public static succeed<T>(ctx: Context, data: T) {
    const responseBody: IResponseData<T> = {
      message: '请求成功',
      data,
    };
    ctx.status = 200;
    this.response<T>(ctx, new SuccessResponse(responseBody));
  }
  public static failed<T>(ctx: Context) {
    const responseBody: IResponseData<T> = {
      message: '服务器错误',
    };
    ctx.status = 500;
    this.response<T>(ctx, new ErrorResponse(responseBody));
  }
  public static response<T>(ctx: Context, result: IResponseData<T>) {
    ctx.body = result;
  }
}
