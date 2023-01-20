
import React, {useState} from 'react';
import BuyBtn from '../BuyBtn/BuyBtn';
import './Package.scss';

function Package(props) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  function handleClick() {
    if(props.disabled) {
      return
    } else {
      setActive(!active)
    }
  }


  return (
    <div className='package'>
      <div className={
        props.disabled 
        ? 'package__container package__container_disabled' 
        : active 
        ? 'package__container package__container_active' 
        : 'package__container'}
        onClick={handleClick}
        onMouseEnter={()=>setHover(false)}
        onMouseLeave={()=>setHover(true)}
      >
        <div className='package__info'>
          <h3 className=
            {active && hover 
            ? 'package__title package__title_active' 
            : 'package__title'}>
            {active && hover
            ? props.titleOnHover 
            : props.title
            }
          </h3>
          <h2 className='package__name'>{props.name}</h2>
          <h3 className='package__taste'>{props.taste}</h3>
          <ul className='package__composition'>{
            props.composition.map((child, i) => {
              return <li className='package__size' key={i}>{child}</li>
            })
          }
          </ul>
        </div>
        <img className='package__img' src={props.image} alt='Cat'></img>
        <p className={props.disabled 
          ? 'package__weight package__weight_disabled'
          : active 
          ? 'package__weight package__weight_active' 
          : 'package__weight'}>
          {props.weight}
          <br/><span>кг</span>
        </p>
      </div>
      <span className={
        props.disabled 
        ? 'package__text package__text_disabled' 
        : 'package__text'}>
        <BuyBtn 
          onClick={handleClick} 
          message={props.message} 
          disabledMessage={props.disabledMessage}
          disabled={props.disabled}
          active={active}
        />
      </span>
    </div>
  )
}

export default Package;