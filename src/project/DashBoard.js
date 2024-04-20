import React, { useEffect, useState } from "react";
import axios from "axios";
import InitialData from "./InitialData";
import FilteredData from "./FilteredData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const DashBoard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [count,setCount]=useState(0)
  const [newstate,setNewState]=useState(true)
  const details=useSelector((state)=>state.New.userDetails)
  const api = async () => {
    const rawdata = await axios.get("https://fakestoreapi.com/products");
    console.log(rawdata);
    setData(rawdata.data);
  };

  useEffect(() => {
    api();
  }, []);

  // const api2 = async () => {
  //   const rawdata = await axios.get("https://freetestapi.com/api/v1/mobiles");
  //   console.log(rawdata);
  //   setData(rawdata.data);
  // };
  // useEffect(()=>{
  //   api2()
  // },[newstate])
  // console.log()


  console.log(data);
  useEffect(() => {
    let filteredResult = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filteredResult);
  }, [input]);
  console.log(filteredData);

  const sortByPriceLowToHigh = () => {
    const sortedProducts = [...data].sort((a, b) => a.price - b.price);
    setData(sortedProducts);
  };
  const sortByPriceHighToLow = () => {
    const sortedProducts2 = [...data].sort((a, b) => b.price - a.price);
    setData(sortedProducts2);
  };

  const set=()=>{
    setCount(count+1)
  }

  return (
    <>
    <Navbar key7={input} key8={setInput} />
   
   
      <div style={{textAlign:"center"}}>
      
      </div>
      <div style={{ marginLeft: "1150px"}}>
        <button onClick={sortByPriceLowToHigh} style={{marginTop:"30px",margin:"15px"}}>Price Low to High</button>
        <button onClick={sortByPriceHighToLow}>Price High To Low</button>
      </div>
      <div><button onClick={()=>{
        setNewState(!newstate)
      }}>Click</button></div>

      {filteredData.length > 0 ? (
        <FilteredData key2={filteredData} />
      ) : (
        <InitialData key1={data}  />
      )}
      {/* <Navbar key7={input} key8={setInput} key9={details}/> */}
    </>
  );
};

export default DashBoard;
