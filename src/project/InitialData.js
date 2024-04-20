import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Slice'
import { Link } from 'react-router-dom'

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
                            <img src={item?.image} alt={item?.title} className="product-image" style={{height:"300px"}} />
                            <div className="product-details">
                                <h2 style={{textAlign:"center"}}>{item.title.slice(0,40)}</h2>
                                <div className="price" style={{textAlign:"center",color:"black"}}><h4>{item?.price}</h4></div>
                                <p>{item.description.slice(0,100)}</p>
                               <Link to={`/dashboard/${item.id}`}> <p>Click To View the Product</p></Link>
                                
                              <div style={{textAlign:"center"}}> <button style={{backgroundColor:"green"}} className="btn" onClick={()=>{
                                    let obj={
                                        title:item?.title,
                                        description:item?.description,
                                        img:item?.image,
                                        price:item?.price
                                    }
                                    dispatch(addToCart(obj))
                                }
                                } >Add to Cart</button></div> 
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
