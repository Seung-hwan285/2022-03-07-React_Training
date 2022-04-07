import React, {useEffect, useState} from "react";
import "../../ui/modules.css"
const api ={
    API_KEY : 'a536cbda68541f2066e2a1fd221d55d5',
    BASE: 'https://api.openweathermap.org/data/2.5/',
};

const Form =()=>{

    const [data,setData]=useState([]);
    const [Icon,setIcon]=useState("");

    let componentMouted=true;

   useEffect(()=>{
       const fetchWeather =async ()=>{
           const response =await fetch(`${api.BASE}weather?q=${'korea'}&appid=${api.API_KEY}`)

           if(componentMouted){
               setData(await response.json());
           }

           // state가 렌더링(마운트)하기전에 동작하기때문에 아무것도 안나오는 현상발생 (값을 읽게 만들어줘야함)
           componentMouted=false;
       }


       fetchWeather();

   },[]);

   console.log(data)

   useEffect(()=>{
       if(data.weather){
           setIcon(data.weather[0].icon);
       }
   },[data]);

   // let temp = (data.main.temp-273.15).toFixed(2);

   return(

        <div className="weather-container">
            <div className="top">
                <div className="location">
                    {data.name}
                </div>

                <div className="temp">

                </div>

                <div className="description">
                    <img src={"http://openweathermap.org/img/w/" + Icon + ".png"}/>
                </div>
            </div>

        </div>
    );

}

export default Form;