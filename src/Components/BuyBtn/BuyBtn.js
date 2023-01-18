import './BuyBtn.scss';

function BuyBtn (props) {
  return (
    <button className='buy' onClick={props.onClick}>купи</button>
  )
} 

export default BuyBtn;