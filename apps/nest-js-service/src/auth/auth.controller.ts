import { AuthService } from "@/auth/auth.service";
import { LocalAuthGuard } from "@/auth/guards/local-auth.guard";
import { Controller, Post, Request, UseGuards } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }
}
