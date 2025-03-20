// src/data/gamesData.js
import ultraNihilBanner from "../img/gameBan.png";
import bloodMoonBanner from "../img/herobg-mobile.png";

const games = [
  // Categoria: Games out!
  {
    id: 1,
    title: "N/A",
    description: "N/A",
    image: "",
    category: "Games out!",
  },

  // Categoria: Work in progress
  {
    id: 2,
    title: "N/A",
    description: "N/A",
    image: "",
    category: "Work in progress",
  },

  // Categoria: Ideas
  {
    id: 3,
    title: "Project Codename: Beyond",
    description: "The Spark is indifferent, the gods are starving, darkness holds the balance-and you, you're barely human.",
    image: ultraNihilBanner,
    category: "Ideas",
  },
  {
    id: 4,
    title: "Project Codename: RedMoon",
    description: "All eyes turned upward, its crust sliding into crimson, a scream unheard, a breath held silent—the Moon is alive.",
    image: bloodMoonBanner,
    category: "Ideas",
  },
];

export default games;
