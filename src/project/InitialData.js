import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Slice'

const InitialData = ({key1}) => {
  const dispatch=useDispatch()
  const [count,setCount]=useState(0)
  const details=useSelector((state)=>state.New.userDetails)
  console.log(details)

//   function display(){
//     if(key1.title==details.title){
//         setCount

//     }
//   }
  return (
    <div>
        <div className="container">
            <div className="row">
                {key1.map((item, index) => (
                    <div key={index} className="col-3">
                        <div className="card">
                            <img src={item.image} alt={item.title} className="product-image" style={{height:"300px"}} />
                            <div className="product-details">
                                <h2>{item.title}</h2>
                                <p>{item.description.slice(0,100)}</p>
                                <span className="price">${item.price}</span>
                                <button className="btn" onClick={()=>{
                                    let obj={
                                        title:item.title,
                                        description:item.description,
                                        img:item.img
                                    }
                                    dispatch(addToCart(obj))
                                }
                                } >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default InitialData
