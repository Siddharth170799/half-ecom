import React from 'react'

const FilteredData = ({key2}) => {
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
                                <h2>{item.title}</h2>
                                <p>{item.description.slice(0,100)}</p>
                                <div style={{textAlign:"center",color:"black"}} className="price">${item.price}</div>
                              <div style={{textAlign:"center",backgroundColor:"blue"}}>  <button className="btn">Add to Cart</button></div>
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
