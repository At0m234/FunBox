import './BuyBtn.scss';

function BuyBtn (props) {
  return (
    <>
      {(props.disabled) 
      ? <span>{props.disabledMessage}</span>
      : (props.active)
      ? <span>{props.message}</span> 
      : <div>Чего сидишь? Порадуй котэ, <button className='buy' onClick={props.onClick}>купи.</button>
        </div>
      }
      {}
    </>
  )
} 

export default BuyBtn;