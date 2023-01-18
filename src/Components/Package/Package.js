
import BuyBtn from '../BuyBtn/BuyBtn';
import React, { useState } from 'react';
import './Package.scss';

function Package(props) {
  const [active, setActive] = useState(false);
  
  return (
    <div className='package'>
      <div className='package__container' 
        onClick={props.onClick}
        style={props.selected 
          ? {border: '4px solid #D91667'} 
          : {border:'4px solid #1698D9'}}
      >
        <div className='package__info'>
          <h3 className='package__title'>{props.title}</h3>
          <h2 className='package__name'>{props.name}</h2>
          <h3 className='package__taste'>{props.taste}</h3>
          <ul className='package__composition'>{
            props.composition.map((child,i) => {
              return <li className='package__size' key={i}>{child}</li>
            })
          }
          </ul>
        </div>
        <img className='package__img' src={props.image} alt='Cat'></img>
        <p className='package__weight' 
          style={props.selected
            ? {backgroundColor: '#D91667'} 
            : {backgroundColor:'#1698D9'}}>
          {props.weight}<br/><span>кг</span></p>
      </div>
      <span className='package__text'><BuyBtn onClick={props.onClick}/></span>
    </div>
  )
}

export default Package;