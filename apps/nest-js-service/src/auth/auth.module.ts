import { JwtStrategy } from "@/auth/strategies/jwt.strategy";
import { LocalStrategy } from "@/auth/strategies/local.strategy";
import { PrismaModule } from "@/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1m" },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
