import { AuthService } from "@/auth/auth.service";
import { RefreshSessionDto } from "@/auth/dtos/refresh-session.dto";
import { LocalAuthGuard } from "@/auth/guards/local-auth.guard";
import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Post("refresh-session")
  async refreshSession(@Body() refreshSessionDto: RefreshSessionDto) {
    return this.authService.refreshSession(
      refreshSessionDto.accessToken,
      refreshSessionDto.refreshToken
    );
  }
}
