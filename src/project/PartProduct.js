
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from './Slice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const PartProduct = () => {

    const {id}=useParams()
    const [data,setData]=useState({})
    const dispatch=useDispatch()
    const details=useSelector((state)=>state.New.userDetails)

    const api2=async()=>{
        const get= await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(get)
        setData(get.data)
    }
    useEffect(()=>{
        api2()
    },[])
  return (
    <>
    <Navbar />
    {/* <div> <Link to={"/cart"}> <div style={{marginLeft:"1300px"}}><h4>Cart - {details.length}</h4></div></Link></div> */}
    <div>
      <div className="col-3">
            <div className="card">
                    <img src={data.image} alt={data.title} className="product-image" style={{ height: "300px" }} />
                    <div className="product-details">
                        <h2 style={{ textAlign: "center" }}>{data.title}</h2>
                        <p>{data.description && data.description.slice(0, 100)}</p>
                        <div style={{ textAlign: "center", color: "black" }} className="price">
                            <h4>{data.price}</h4>
                        </div>
                        <div style={{ textAlign: "center", backgroundColor: "blue" }}>
                            <button className="btn" onClick={() => {
                                const obj = {
                                    title: data.title,
                                    description: data.description,
                                    img: data.image,
                                    price: data.price
                                };
                                dispatch(addToCart(obj));
                            }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}

export default PartProduct
