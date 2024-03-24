import { JwtAuthGuard } from "@/auth/guards/jwt-auth.guard";
import { GamesService } from "@/games/games.service";
import { Controller, Get, Query, UseGuards } from "@nestjs/common";

@Controller("games")
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllGames(@Query("name") name) {
    return this.gamesService.getAllGames(name);
  }
}
