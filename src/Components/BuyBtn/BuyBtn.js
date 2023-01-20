import './BuyBtn.scss';

function BuyBtn (props) {
  return (
    <>
      {(props.disabled) 
      ? <span>{props.disabledMessage}</span>
      : (props.active)
      ? <span>{props.message}</span> 
      : <span>Чего сидишь?Порадуй котэ,<button className='buy' onClick={props.onClick}>купи</button>
        </span>
      }
      {}
    </>
  )
} 

export default BuyBtn;