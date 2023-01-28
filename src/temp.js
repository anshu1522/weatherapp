import React, { useEffect, useState } from "react";
import "./temp.css";
const Temp = () => {
    const [search,setSearch] = useState("");
    const [feel,setFeel]= useState();
     const getData = async() =>{
        try{
const res= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${feel}&appid=bfda8d976230d8c896ad96b1d37ae8d9`);
 const data = await res.json();
//  console.log("anshu",data);
      setSearch(data.main);
        }
        catch(error){
console.log("error message",error)
        }

     }
    useEffect( () =>{
        getData() ;
    },[feel] );
    const city = (props) => {
        setFeel(props.target.value);
      };
      
  return (
    <>
      <div className="bodyy">
        <div className="boxx">
          <div className="input"><input value={feel} onChange={city}></input></div>
          <div className="">{feel}</div>
         <div>{search?.temp }kelvin</div>
         </div>
      <div className="wave1"></div>
     
      </div>
      
    </>
  );
};
export default Temp;
