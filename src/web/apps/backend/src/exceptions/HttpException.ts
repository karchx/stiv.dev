export class HttpException extends Error {
  public status: number;
  public message: string;

  public errors: Record<any, any>;

  constructor(status: number, message: string, errors?: Record<any, any>) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors!;
  }
}
