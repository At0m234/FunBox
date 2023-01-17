import './Package.scss';

function Package(props) {
  return (
    <div className='package'>
      <div className='package__info'>
        <h3 className='package__title'>{props.title}</h3>
        <h2 className='package__name'>{props.name}</h2>
        <h3 className='package__taste'>{props.taste}</h3>
        <h4 className='package__size'>{props.size}</h4>
        <h4 className='package__gift'>{props.gift}</h4>
      </div>
      <img className='package__img' src={props.image} alt='Cat'></img>
      <p className='package__weight'>{props.weight}<br/><span>кг</span></p>
    </div>
  )
}

export default Package;