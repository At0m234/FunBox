import PackageImg from '../../images/Package/PackageImg.svg';

const initialArray = [
  {
    title: `Сказочное заморское яство`,
    titleOnHover: `Котэ не одобряет?`,
    name: `Нямушка`,
    taste: `с фуа-гра`, 
    composition: [`10 порций`, `мышь в подарок`],
    image: PackageImg,
    weight: `0,5`,
    message: 'Печень утки разварная с артишоками.',
    disabled: false,
    disabledMessage: `Печалька, с фуа-гра закончился`,
  },
  {
    title: `Сказочное заморское яство`,
    titleOnHover: `Котэ не одобряет?`,
    name: `Нямушка`,
    taste: `с рыбой`, 
    composition: [`40 порций`, `2 мыши в подарок`],
    image: PackageImg,
    weight: `2`,
    message: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled: false,
    disabledMessage: `Печалька, с рыбой закончился`,
  },
  {
    title: `Сказочное заморское яство`,
    titleOnHover: `Котэ не одобряет?`,
    name: `Нямушка`,
    taste: `с курой`, 
    composition: [`100 порций`, `5 мышей в подарок`, `заказчик доволен`],
    image: PackageImg,
    weight: `5`,
    message: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true,
    disabledMessage: `Печалька, с курой закончился`,
  },
]

export default initialArray;