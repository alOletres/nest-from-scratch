import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUser() {
    return this.service.getUser();
  }
}
