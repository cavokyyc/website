import springbankBurgerImg from '../backgroundRemoved/SpringbankBurger.png'
import chickenBurgerImg from '../backgroundRemoved/ChickenBurger.png'
import koreanBBQBurgerImg from '../backgroundRemoved/KoreanBBQBurger.png'

const koreanBBQBurger = {
  name: "Korean BBQ Burger",
  description: "Saturdays Only! Korean bulgogi marinated beef sirloin, sauteed with onions, topped with lettuce and secret sauce. Served with fries",
  isSpecial: true,
  img: koreanBBQBurgerImg,
  srcSet: "/website/menu_assets/KoreanBBQBurger330.png 330w, /website/menu_assets/KoreanBBQBurger760.png 760w, /website/menu_assets/KoreanBBQBurger1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const springbankBurger = {
  name: "Springbank Burger",
  description: "Homemade beef patty, cheese, bacon, lettuce, tomatoes, and pickles, with a special burger sauce. Served with fries",
  isSpecial: true,
  img: springbankBurgerImg,
  srcSet: "/website/menu_assets/SpringbankBurger330.png 330w, /website/menu_assets/SpringbankBurger760.png 760w, /website/menu_assets/SpringbankBurger1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
}; 

const chickenBurger= {
  name: "Chicken Burger",
  description: "Whole chicken thigh, fried to crispy perfection. Topped with pickles and our secret spicy mayo. Served with fries",
  isSpecial: true,
  img: chickenBurgerImg,
  srcSet: "/website/menu_assets/ChickenBurger330.png 330w, /website/menu_assets/ChickenBurger760.png 760w, /website/menu_assets/ChickenBurger1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const dailySpecial = {
  name: "Daily Special",
  description: "Korean-Asian fusion dishes rotated daily. Served with fried rice, chow mein, and a side salad",
  isSpecial: true,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const porkKatsu = {
  name: "Pork Katsu",
  description: "Homemade pork loin, breaded and fried, topped with our special Katsu sauce. Served with fried rice and a side salad",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const doubleSpringbankBurger= {
  name: "Double Springbank Burger",
  description: "Our signature Springbank Burger with two homemade beef patties, cheese, bacon, lettuce, tomatoes, pickles and secret sauce. Served with fries",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const deluxeChickenBurger = {
  name: "Deluxe Chicken Burger",
  description: "Crispy fried chicken topped with pickles, cheese, bacon, and our spicy mayo. Served with fries",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const spicyChickenWrap = {
  name: "Spicy Chicken Wrap",
  description: "Crispy fried chicken and lettuce with our secret spicy mayo. Wrapped in a soft tortilla and served with fries",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

const pulledPork = {
  name: "Pulled Pork",
  description: "Tender and savory pulled pork served on buns with a side of fries",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

export {koreanBBQBurger, springbankBurger, chickenBurger, dailySpecial, porkKatsu, doubleSpringbankBurger, deluxeChickenBurger, spicyChickenWrap, pulledPork}