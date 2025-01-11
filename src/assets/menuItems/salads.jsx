import cobbSaladImg from '../backgroundRemoved/CobbSalad.png'

const greenSalad = {
  name: "Green Salad",
  description: "Romaine lettuce, cheese, tomato, and hard boiled egg. Served with ranch dressing",
  isSpecial: false,
  img: null,
  srcSet: null,
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
}

const cobbSalad = {
  name: "Cobb Salad",
  description: "Roasted chicken and bacon on romaine lettuce, cheese, tomato, and hard boiled egg. Served with ranch dressing",
  isSpecial: true,
  img: cobbSaladImg,
  srcSet: "/website/menu_assets/CobbSalad330.png 330w, /website/menu_assets/CobbSalad760.png 760w, /website/menu_assets/CobbSalad1024.png 1024w",
  sizes: "(max-width: 769px) 10vw, (max-width: 1024px) 30vw, 100vw",
};

export { greenSalad, cobbSalad }