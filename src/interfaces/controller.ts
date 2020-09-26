import { Request } from "./request";
import { Response } from "./response";

export interface Controller {
  handle(request: Request): Promise<Response>
}