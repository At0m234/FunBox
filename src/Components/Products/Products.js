import './Products.scss';
import Package from '../Package/Package';
import PackageImg from '../../images/Package/PackageImg.svg';

function Products(props) {
  return (
    <section className='products'>
      <h1 className='products__title'>Ты сегодня покормил кота?</h1>
      <div className='products__container'>
        <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с фуа-гра`}
          size={`10 порций`}
          gift={`мышь в подарок`}
          image={PackageImg}
          weight={`0,5`}
        />
        <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с рыбой`}
          size={`40 порций`}
          gift={`2 мыши в подарок`}
          image={PackageImg}
          weight={`2`}
        />
        <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с курой`}
          size={`100 порций`}
          gift={`5 мышей в подарок
          заказчик доволен`}
          image={PackageImg}
          weight={`5`}
        />
      </div>
  </section>
  )
}

export default Products;