import breakfastImg from '../backgroundRemoved/BaconSausageBreakfast.png'
import eggyBurgerImg from '../backgroundRemoved/EggyBurger.png'

const baconSausageBreakfast = {
  name: "Bacon & Sausage Breakfast",
  description: "Classic breakfast served with bacon and sausage, two eggs any style, and toast. Served with hash browns and fresh fruit",
  isSpecial: true,
  img: breakfastImg,
};

const eggyBurger = {
  name: "Eggy Burger",
  description: "Crispy bacon on soft scrambled eggs, topped with cheese, lettuce, and tomato. Served with hash browns and fresh fruit",
  isSpecial: true,
  img: eggyBurgerImg,
};

const cfcBreakfast = {
  name: "CFC Breakfast",
  description: "Classic breakfast served with choice of sausage or bacon, two eggs any style, and toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
};

const denverSandwich = {
  name: "Denver Sandwich",
  description: "Onions, red bell peppers, and ham, sauteed into two scrambled eggs with cheese on toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
};

const breakfastSandwich = {
  name: "Breakfast Sandwich",
  description: "Two eggs, topped with bacon and cheese between two slices of toast. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
};

const breakfastWrap = {
  name: "Breakfast Wrap",
  description: "Two eggs, onion, red bell peppers, and cheese wrapped in a warm tortilla. Served with hash browns and fresh fruit",
  isSpecial: false,
  img: null,
};

const cheeseOmelette = {
  name: "Cheese Omelette",
  description: "Rustic diner-style omelette made with cheese folded between two eggs. Served with toast, hash browns, and fresh fruit",
  isSpecial: false,
  img: null,
};

export { baconSausageBreakfast, eggyBurger, cfcBreakfast, denverSandwich, breakfastSandwich, breakfastWrap, cheeseOmelette };