import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './Slice'


const Cart = () => {
    const dispatch=useDispatch()
    const details=useSelector((state)=>state.New.userDetails)

    
  return (
    <div>


        {details.length > 0 ?     <div className='row'>
      {details.map((item,index)=>{
        return(
            <>
            <div className='col-3'>
<div class="card" key={index}>
  <img src={item?.img} alt="Example Image" style={{height:"300px"}}/>
  <div class="card-content">
    <h3>{item?.title}</h3>
    <p style={{color:"black"}}><h4>{item?.price}</h4></p>
    <p>{item?.description}</p>
   <div style={{textAlign:"center"}}><button style={{backgroundColor:"red"}} onClick={()=>{
        dispatch(removeFromCart(item.title))
    }}>Remove From Cart</button></div> 
    </div>
</div></div></>
        )
      })}
      </div>:<div><img src='https://images.vexels.com/media/users/6821/74695/raw/c40cf62413e218375c46aff4301ab6d8-empty-shopping-cart-background.jpg' style={{height:"700px",width:"1550px"}} /></div>}



  
    </div>
  )
}

export default Cart
