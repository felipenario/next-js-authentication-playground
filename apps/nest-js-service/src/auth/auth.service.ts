import { PrismaService } from "@/prisma/prisma.service";
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
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
    const accessTokenPayload = { sub: user.id, email: user.email };

    const refreshToken = this.jwtService.sign(
      {},
      {
        secret: process.env.REFRESH_JWT_SECRET,
      }
    );

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    return {
      accessToken: this.jwtService.sign(accessTokenPayload),
      refreshToken,
    };
  }

  async refreshSession(accessToken: string, refreshToken: string) {
    try {
      const accessTokenPayload = this.jwtService.decode(accessToken);

      this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_JWT_SECRET,
        ignoreExpiration: true,
      });

      const user = await this.prisma.user.findUnique({
        where: {
          id: accessTokenPayload.sub,
        },
      });

      if (user.refreshToken !== refreshToken) {
        throw new InternalServerErrorException(
          "Error refreshing user session!"
        );
      }

      const newAccessToken = this.jwtService.sign({
        sub: user.id,
        email: user.email,
      });

      const newRefreshToken = this.jwtService.sign(
        {},
        {
          secret: process.env.REFRESH_JWT_SECRET,
        }
      );

      const updatedUser = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: newRefreshToken,
        },
      });

      return {
        accessToken: newAccessToken,
        refreshToken: updatedUser.refreshToken,
      };
    } catch (error) {
      throw new InternalServerErrorException("Error refreshing user session!");
    }
  }
}
