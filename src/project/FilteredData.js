import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './Slice'

const FilteredData = ({key2}) => {
    const dispatch=useDispatch()
  return (
    <div>
       <div>
        <div className="container">
            <div className="row">
                {key2.map((item, index) => (
                    <div key={index} className="col-3">
                        <div className="card">
                            <img src={item.image} alt={item.title} className="product-image" style={{height:"300px"}} />
                            <div className="product-details">
                                <h2 style={{textAlign:"center"}}>{item.title}</h2>
                                <p>{item.description.slice(0,100)}</p>
                                <div style={{textAlign:"center",color:"black"}} className="price"><h4>${item.price}</h4></div>
                              <div style={{textAlign:"center",backgroundColor:"blue"}}>  <button className="btn" onClick={()=>{
                                let obj={
                                    title:item.title,
                                    description:item.description,
                                    img:item.image,
                                    price:item.price

                                }
                                dispatch(addToCart(obj))
                              }}>Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilteredData
