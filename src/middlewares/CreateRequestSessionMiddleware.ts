import {Middleware, PlatformRequest} from "@tsed/common";

@Middleware()
export class CreateRequestSessionMiddleware {
  use(@Req() request: PlatformRequest) {
    if (request.session) {
      request.session.user = request.session.user || {
        id: null
      };
    }
  }
}
