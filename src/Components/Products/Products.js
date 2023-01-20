import './Products.scss';
import Package from '../Package/Package';
import initialArray from '../utils/constants';

function Products() {
  return (
    <section className='products'>
      <h1 className='products__title'>Ты сегодня покормил кота?</h1>
      <div className='products__container'>
        {
          initialArray.map((pack, index) => {
            return <Package 
              key={index}
              title={pack.title}
              titleOnHover={pack.titleOnHover}
              name={pack.name}
              taste={pack.taste}
              composition={pack.composition}
              image={pack.image}
              weight={pack.weight}
              message={pack.message}
              disabled={pack.disabled}
              disabledMessage={pack.disabledMessage}
            />
          })
        }
      </div>
  </section>
  )
}

export default Products;