import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({key7,key8}) => {
    const details=useSelector((state)=>state.New.userDetails)
  return (
    <div>
      <nav>
        <div class="logo"> <div style={{textAlign:"center"}}>
    <h1>Shopify</h1></div></div>
    <input
          type="text"
          placeholder="Search"
          value={key7}
          onChange={(e) => {
            key8(e.target.value);
          }}
       style={{marginRight:"500px"}} />
        
       <div style={{marginRight:"110px",marginTop:"15px"}}>
        <ul class="nav-links ">
           <Link to={"/dashboard"}> <li style={{fontSize:"20px"}}><a href="#">Home</a></li></Link>
            <li style={{fontSize:"20px"}}><a href="#">About</a></li>
            <li style={{fontSize:"20px"}}><a href="#">Services</a></li>
            <li style={{fontSize:"20px"}}><a href="#">Contact</a></li>
          <Link to={"/cart"}> <li><img src='https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Image-HD.png' style={{height:"40px",width:"40px"}}/><span style={{fontSize:"20px",textDecoration:"none"}}>{details.length}</span></li></Link> 
        </ul>
       
        </div>
    </nav>

   
    </div>
  )
}

export default Navbar
