import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async getAllGames(name: string | undefined) {
    const games = await this.prisma.game.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return games;
  }
}
