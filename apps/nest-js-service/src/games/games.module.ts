import { GamesController } from "@/games/games.controller";
import { GamesService } from "@/games/games.service";
import { PrismaModule } from "@/prisma/prisma.module";
import { Module } from "@nestjs/common";

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [PrismaModule],
})
export class GamesModule {}
