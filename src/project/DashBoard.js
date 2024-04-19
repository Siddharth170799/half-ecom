import React, { useEffect, useState } from "react";
import axios from "axios";
import InitialData from "./InitialData";
import FilteredData from "./FilteredData";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [count,setCount]=useState(0)
  const details=useSelector((state)=>state.New.userDetails)
  const api = async () => {
    const rawdata = await axios.get("https://fakestoreapi.com/products");
    console.log(rawdata);
    setData(rawdata.data);
  };

  useEffect(() => {
    api();
  }, []);
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
    <div style={{textAlign:"center"}}>
    <h1>Shopify</h1></div>
    <div style={{marginLeft:"1300px"}}><h4>Cart - {details.length}</h4></div>
      <div style={{textAlign:"center"}}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div style={{ marginLeft: "1150px" }}>
        <button onClick={sortByPriceLowToHigh}>Price Low to High</button>
        <button onClick={sortByPriceHighToLow}>Price High To Low</button>
      </div>

      {filteredData.length > 0 ? (
        <FilteredData key2={filteredData} />
      ) : (
        <InitialData key1={data}  />
      )}
    </>
  );
};

export default DashBoard;
