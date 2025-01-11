import breakfastImg from '../backgroundRemoved/BaconSausageBreakfast.png'
import eggyBurgerImg from '../backgroundRemoved/EggyBurger.png'

const baconSausageBreakfast = {
  name: "Bacon & Sausage Breakfast",
  description: "Classic breakfast served with bacon and sausage, two eggs any style, and toast. Served with hash browns and fresh fruit",
  isSpecial: true,
  img: breakfastImg,
  srcSet: "/website/menu_assets/BaconSausageBreakfast330.png 330w, /website/menu_assets/BaconSausageBreakfast760.png 760w, /website/menu_assets/BaconSausageBreakfast1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const eggyBurger = {
  name: "Eggy Burger",
  description: "Crispy bacon on soft scrambled eggs, topped with cheese, lettuce, and tomato. Served with hash browns and fresh fruit",
  isSpecial: true,
  img: eggyBurgerImg,
  srcSet: "/website/menu_assets/EggyBurger330.png 330w, /website/menu_assets/EggyBurger760.png 760w, /website/menu_assets/EggyBurger1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const cfcBreakfast = {
  name: "CFC Breakfast",
  description: "Classic breakfast served with choice of sausage or bacon, two eggs any style, and toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const denverSandwich = {
  name: "Denver Sandwich",
  description: "Onions, red bell peppers, and ham, sauteed into two scrambled eggs with cheese on toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const breakfastSandwich = {
  name: "Breakfast Sandwich",
  description: "Two eggs, topped with bacon and cheese between two slices of toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const breakfastWrap = {
  name: "Breakfast Wrap",
  description: "Two eggs, onion, red bell peppers, and cheese wrapped in a warm tortilla. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const cheeseOmelette = {
  name: "Cheese Omelette",
  description: "Rustic diner-style omelette made with cheese folded between two eggs. Served with toast, hash browns, and fresh fruit",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

export { baconSausageBreakfast, eggyBurger, cfcBreakfast, denverSandwich, breakfastSandwich, breakfastWrap, cheeseOmelette };