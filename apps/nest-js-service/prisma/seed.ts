import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { gamesToSeed } from "./gamesToSeed";

const prisma = new PrismaClient();

async function main() {
  const testUserPlainPassword = "test123";

  const hashedPassword = await bcrypt.hash(testUserPlainPassword, 10);

  const testUser = await prisma.user.upsert({
    where: { email: "testerson.silva@test.com" },
    update: {},
    create: {
      name: "Testerson Silva",
      email: "testerson.silva@test.com",
      password: hashedPassword,
    },
  });

  console.log({ testUser });

  const insertedGames = [];

  for await (const gameToSeed of gamesToSeed) {
    const game = await prisma.game.upsert({
      where: { id: gameToSeed.id },
      update: {},
      create: {
        name: gameToSeed.name,
        developers: gameToSeed.developers,
        publishers: gameToSeed.publishers,
        platforms: gameToSeed.platforms,
        releaseDate: gameToSeed.releaseDate,
        genres: gameToSeed.genres,
        coverArt: gameToSeed.coverArt,
        description: gameToSeed.description,
      },
    });

    insertedGames.push(game);
  }

  console.log({ insertedGames });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit();
  });
