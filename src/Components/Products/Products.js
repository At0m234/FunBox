import './Products.scss';
import Package from '../Package/Package';
import initialArray from '../utils/constants';

function Products(props) {
  return (
    <section className='products'>
      <h1 className='products__title'>Ты сегодня покормил кота?</h1>
      <div className='products__container'>
        {
          initialArray.map((pack, index) => {
            return <Package 
              key={index}
              title={pack.title}
              name={pack.name}
              taste={pack.taste}
              composition={pack.composition}
              image={pack.image}
              weight={pack.weight}

              selected={props.selected === index}
              onClick={()=>{
                console.log(pack.status);
                console.log(props.selected);
                props.handleClick(pack)
              }}


            />
          })
        }
        {/* <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с фуа-гра`}
          children={[`10 порций`, `мышь в подарок`]}
          image={PackageImg}
          weight={`0,5`}

          selected={props.selected}
          setSelected={props.setSelected}
          handleSelect={props.handleSelect}
        />
        <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с рыбой`}
          children={[`40 порций`, `2 мыши в подарок`]}
          image={PackageImg}
          weight={`2`}

          selected={props.selected}
          setSelected={props.setSelected}
          handleSelect={props.handleSelect}
        />
        <Package 
          title={`Сказочное заморское яство`}
          name={`Нямушка`}
          taste={`с курой`}
          children={[`100 порций`, `5 мышей в подарок`, `заказчик доволен`]}
          image={PackageImg}
          weight={`5`}

          selected={props.selected}
          setSelected={props.setSelected}
          handleSelect={props.handleSelect}
        /> */}
      </div>
  </section>
  )
}

export default Products;