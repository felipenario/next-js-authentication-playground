import { PrismaService } from "@/prisma/prisma.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException("Incorrect email or password!");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("Incorrect email or password!");
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async signIn(user: User) {
    const payload = { sub: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
