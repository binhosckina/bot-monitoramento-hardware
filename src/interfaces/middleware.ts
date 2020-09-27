import { Request } from "./request";
import { Response } from "./response";

export interface Middleware {
  handle: (httpRequest: Request) => Promise<Response>
}
