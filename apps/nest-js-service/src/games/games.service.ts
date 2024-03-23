import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async getAllGames() {
    return this.prisma.game.findMany();
  }
}
