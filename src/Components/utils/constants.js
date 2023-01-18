import PackageImg from '../../images/Package/PackageImg.svg';

const initialArray = [
  {
    title: `Сказочное заморское яство`,
    name: `Нямушка`,
    taste: `с фуа-гра`, 
    composition: [`10 порций`, `мышь в подарок`],
    image: PackageImg,
    weight: `0,5`,
    status: 'unSelected' 
  },
  {
    title: `Сказочное заморское яство`,
    name: `Нямушка`,
    taste: `с рыбой`, 
    composition: [`40 порций`, `2 мыши в подарок`],
    image: PackageImg,
    weight: `2`,
    status: 'selected'
  },
  {
    title: `Сказочное заморское яство`,
    name: `Нямушка`,
    taste: `с курой`, 
    composition: [`100 порций`, `5 мышей в подарок`, `заказчик доволен`],
    image: PackageImg,
    weight: `5`,
    status: 'disabled'
  },
]

export default initialArray;