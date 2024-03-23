import { Game } from "@prisma/client";

export const gamesToSeed: Game[] = [
  {
    id: 1,
    name: "Assassin's Creed",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms: "PlayStation 3, Xbox 360, Microsoft Windows",
    releaseDate: new Date(2007, 11, 13),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg?20220310142918",
    description:
      "Assassin's Creed is an action-adventure game developed by Ubisoft Montreal and published by Ubisoft. It is the first installment in the Assassin's Creed series. The video game was released for PlayStation 3 and Xbox 360 in November 2007. A Microsoft Windows version titled Assassin's Creed: Director's Cut Edition containing additional content was released in April 2008.",
  },
  {
    id: 2,
    name: "Assassin's Creed II",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "PlayStation 3, Xbox 360, Microsoft Windows, OS X, PlayStation 4, Xbox One, Nintendo Switch",
    releaseDate: new Date(2009, 11, 17),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG?20220310144338",
    description:
      "Assassin's Creed II is a 2009 action-adventure video game developed by Ubisoft Montréal and published by Ubisoft.[1] It is the second major installment in the Assassin's Creed series, and the sequel to 2007's Assassin's Creed. The game was first released on the PlayStation 3 and Xbox 360 in November 2009, and was later made available on Microsoft Windows in March 2010 and OS X in October 2010. Remastered versions of the game and its two sequels, Assassin's Creed: Brotherhood and Assassin's Creed: Revelations, were released as part of The Ezio Collection compilation for the PlayStation 4 and Xbox One on November 15, 2016, and for the Nintendo Switch on February 17, 2022.",
  },
  {
    id: 3,
    name: "Assassin's Creed: Brotherhood",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "PlayStation 3, Xbox 360, Microsoft Windows, OS X, PlayStation 4, Xbox One, Nintendo Switch",
    releaseDate: new Date(2010, 11, 16),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg?20220310143141",
    description:
      "Assassin's Creed: Brotherhood is a 2010 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft.[1][2] It is the third major installment in the Assassin's Creed series, and the second chapter in the 'Ezio Trilogy', as a direct sequel to 2009's Assassin's Creed II. The game was first released on the PlayStation 3 and Xbox 360 in November and December 2010 and was later made available on Microsoft Windows in March and June 2011. A remastered version of Brotherhood, along with Assassins's Creed II and its sequel, Assassin's Creed: Revelations, was released as part of The Ezio Collection compilation for the PlayStation 4 and Xbox One on November 15, 2016, and for the Nintendo Switch on February 17, 2022.",
  },
  {
    id: 4,
    name: "Assassin's Creed Revelations",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "PlayStation 3, Xbox 360, Microsoft Windows, OS X, PlayStation 4, Xbox One, Nintendo Switch",
    releaseDate: new Date(2011, 11, 15),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Assassins_Creed_Revelations_Cover.jpg/220px-Assassins_Creed_Revelations_Cover.jpg",
    description:
      "Assassin's Creed Revelations is a 2011 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the fourth major installment in the Assassin's Creed series, and a direct sequel to 2010's Assassin's Creed: Brotherhood, concluding the 'Ezio Trilogy.' The game was released on PlayStation 3, Xbox 360, and Microsoft Windows in November and December 2011. A remastered version of Revelations, along with Assassin's Creed II and Brotherhood, was released as part of The Ezio Collection compilation for the PlayStation 4 and Xbox One on November 15, 2016, and for the Nintendo Switch on February 17, 2022.",
  },
  {
    id: 5,
    name: "Assassin's Creed III",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms: "PlayStation 3, Xbox 360, Microsoft Windows, Wii U",
    releaseDate: new Date(2012, 10, 30),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Assassin%27s_Creed_III_Game_Cover.jpg/220px-Assassin%27s_Creed_III_Game_Cover.jpg",
    description:
      "Assassin's Creed III is a 2012 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the fifth major installment in the Assassin's Creed series, and a direct sequel to 2011's Assassin's Creed: Revelations. The game was released worldwide for PlayStation 3 and Xbox 360, beginning in North America on October 30, 2012, with a Wii U and Microsoft Windows release in November 2012. A remastered version of the game was released in 2019 for Windows, PlayStation 4, Xbox One and Nintendo Switch, and in 2021 for Google Stadia.",
  },
  {
    id: 6,
    name: "Assassin's Creed IV: Black Flag",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "PlayStation 3, Xbox 360, Microsoft Windows, Wii U, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2013, 10, 29),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg/220px-Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg",
    description:
      "Assassin's Creed IV: Black Flag is a 2013 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It is the sixth major installment in the Assassin's Creed series. Its historical timeframe precedes that of Assassin's Creed III (2012), but its modern-day sequences succeed III's own. Black Flag was originally released for PlayStation 3, Xbox 360, and Wii U in October 2013 and a month later for PlayStation 4, Windows, and Xbox One. It was later ported to the Nintendo Switch as part of The Rebel Collection alongside Assassin's Creed Rogue in December 2019. The game was released for Google Stadia in September 2021.",
  },
  {
    id: 7,
    name: "Assassin's Creed Rogue",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "PlayStation 3, Xbox 360, Microsoft Windows, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2014, 11, 11),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Assassin%27s_Creed_Rogue.jpg/220px-Assassin%27s_Creed_Rogue.jpg",
    description:
      "Assassin's Creed Rogue is a 2014 action-adventure video game developed by Ubisoft Sofia and published by Ubisoft.[1] It is the seventh major installment in the Assassin's Creed series, and is set between 2013's Assassin's Creed IV: Black Flag and 2012's Assassin's Creed III. It also has ties to Assassin's Creed Unity, which was released on the same day as Rogue. It is the last Assassin's Creed game to be developed for the seventh generation of consoles, being released for PlayStation 3 and Xbox 360 in November 2014,[1][2] and for Windows in March 2015.[3][4] A remastered version of the game was released for PlayStation 4 and Xbox One in March 2018.[5] It was also released on the Nintendo Switch as part of The Rebel Collection alongside Black Flag in December 2019,[6] and for Google Stadia in October 2021.[7]",
  },
  {
    id: 8,
    name: "Assassin's Creed Unity",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2014, 11, 11),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Assassin%27s_Creed_Unity_cover.jpg/220px-Assassin%27s_Creed_Unity_cover.jpg",
    description:
      "Assassin's Creed Unity is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It was released in November 2014 for PlayStation 4, Windows, and Xbox One, and in December 2020 for Stadia.[1] It is the eighth major installment in the Assassin's Creed series, and the successor to 2013's Assassin's Creed IV: Black Flag. It also has ties to Assassin's Creed Rogue, which was released for the previous generation consoles on the same day as Unity.",
  },
  {
    id: 9,
    name: "Assassin's Creed Syndicate",
    developers: "Ubisoft Quebec",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2015, 10, 23),
    genres: "Action-adventure, stealth",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg/220px-Assassin%27s_Creed_Syndicate_cover.jpg",
    description:
      "Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It was released on October 23, 2015, for PlayStation 4 and Xbox One, and on November 19, 2015, for Windows. It is the ninth major installment in the Assassin's Creed series, and the successor to 2014's Assassin's Creed Unity.",
  },
  {
    id: 10,
    name: "Assassin's Creed Origins",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2017, 10, 27),
    genres: "Action role-playing",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png/220px-Assassin%27s_Creed_Origins_Cover_Art.png",
    description:
      "Assassin's Creed Origins is a 2017 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the tenth major installment in the Assassin's Creed series, following 2015's Assassin's Creed Syndicate. Principally set in Egypt, near the end of the Ptolemaic period from 49 to 43 BC, the story follows a Medjay named Bayek of Siwa and his wife Aya as they seek revenge for the murder of their son. It also explores the origins of the Assassin Brotherhood—referred here to as the Hidden Ones—and of their millennia-long conflict with the Order of the Ancients—forerunners to the Templar Order. The framing story, set in the 21st century, follows a new character, Layla Hassan, who relives Bayek and Aya's memories using a modified Animus device.",
  },
  {
    id: 10,
    name: "Assassin's Creed Odyssey",
    developers: "Ubisoft Quebec",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Xbox One, Nintendo Switch, Google Stadia",
    releaseDate: new Date(2018, 10, 5),
    genres: "Action role-playing",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/ACOdysseyCoverArt.png/220px-ACOdysseyCoverArt.png",
    description:
      "Assassin's Creed Odyssey is a 2018 action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the eleventh major installment in the Assassin's Creed series and the successor to 2017's Assassin's Creed Origins. Like its predecessor, the game features a large open world and adopts many elements from the role-playing genre, putting more emphasis on combat and exploration than stealth. Naval combat from previous titles in the series also plays a prominent role in Odyssey. The game's plot tells a mythological history of the Peloponnesian War between Athens and Sparta from 431 to 422 BC. Players control a Spartan mercenary, who fights on both sides of the conflict as they attempt to find their family and eliminate the mysterious Cult of Kosmos. Odyssey also continues the story arc of Layla Hassan, a major character introduced in Origins, who relives the mercenary's memories through the Animus device to find a powerful artifact.",
  },
  {
    id: 11,
    name: "Assassin's Creed Valhalla",
    developers: "Ubisoft Montreal",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Playstation 5, Xbox One, Xbox Series X/S, Google Stadia",
    releaseDate: new Date(2020, 11, 10),
    genres: "Action role-playing",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg/220px-Assassin%27s_Creed_Valhalla_cover.jpg",
    description:
      "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles. Players control Eivor Varinsdottir, a Viking raider who, while attempting to establish a new Viking clan in England, becomes embroiled in the centuries-old conflict between the Assassin Brotherhood, who fight for peace and liberty, and the Templar Order, who desire peace through control.[c] The game also includes a framing story, set in the 21st century, which follows Layla Hassan, an Assassin who relives Eivor's memories so as to find a way to save the Earth from destruction.",
  },
  {
    id: 12,
    name: "Assassin's Creed Mirage",
    developers: "Ubisoft Bordeaux",
    publishers: "Ubisoft",
    platforms:
      "Microsoft Windows, Playstation 4, Playstation 5, Xbox One, Xbox Series X/S, Google Stadia",
    releaseDate: new Date(2023, 10, 5),
    genres: "Action-adventure",
    coverArt:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Assassin%27s_Creed_Mirage_cover.jpeg/220px-Assassin%27s_Creed_Mirage_cover.jpeg",
    description:
      "Assassin's Creed Mirage is a 2023 action-adventure game developed by Ubisoft Bordeaux and published by Ubisoft. The game is the thirteenth major installment in the Assassin's Creed series and the successor to 2020's Assassin's Creed Valhalla. While its historical timeframe precedes that of Valhalla, its modern-day framing story succeeds Valhalla's own. Set in 9th-century Baghdad during the Islamic Golden Age—in particular during the Anarchy at Samarra—the story follows Basim Ibn Ishaq (a character first introduced in Valhalla), a street thief who joins the Hidden Ones to fight for peace and liberty, against the Order of the Ancients,[b] who desire peace through control. The main narrative focuses on Basim's internal struggle between his duties as a Hidden One and his desire to uncover his mysterious past.",
  },
];
