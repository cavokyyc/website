import clubhouseImg from '../backgroundRemoved/ClubhouseSandwich.png'

const clubhouse = {
  name: "Clubhouse",
  description: "Rotisserie chicken and bacon, topped with lettuce, tomato, and mayo. Served between three slices of toast",
  isSpecial: true,
  img: clubhouseImg,
  srcSet: "/website/menu_assets/ClubhouseSandwich330.png 330w, /website/menu_assets/ClubhouseSandwich760.png 760w, /website/menu_assets/ClubhouseSandwich1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const classicBLT = {
  name: "Classic BLT",
  description: "Bacon, lettuce, and tomato. Served between two slices of toast with mayo",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const chickenSalad = {
  name: "Chicken Salad",
  description: "Cold chicken salad made with rotisserie chicken, celery, and apples. Served between two slices of bread",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const turkey = {
  name: "Sliced Turkey",
  description: "Turkey slices, romaine lettuce, tomato, and cheese. Served between two slices of bread with mayo",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const hamAndCheese = {
  name: "Ham & Cheese",
  description: "Ham and cheese with tomato, lettuce, and mayo. Served between two slices of bread",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const eggSalad = {
  name: "Egg Salad",
  description: "Egg, mayo, and celery. Served between two slices of bread",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const tunaSalad = {
  name: "Tuna Salad",
  description: "Tuna, mayo, and celery. Served between two slices of bread",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const grilledCheese = {
  name: "Grilled Cheese",
  description: "Two types of cheese melted between two slices of toast",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const grilledCheeseWithBacon= {
  name: "Grilled Cheese with Bacon",
  description: "Our popular grilled cheese sandwich, but even better with bacon",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

export { clubhouse, classicBLT, chickenSalad, turkey, hamAndCheese, eggSalad, tunaSalad, grilledCheese, grilledCheeseWithBacon }