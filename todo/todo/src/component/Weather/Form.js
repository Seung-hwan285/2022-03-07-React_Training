import React, {useEffect, useState} from "react";

const api ={
    API_KEY : 'cd439d0d8386ee860ee3c082e826e1ca',
    BASE: 'https://api.openweathermap.org/data/2.5/',
};

const Form =()=>{

    const [data,setData]=useState([]);

    let componentMouted=true;

   useEffect(()=>{
       const fetchWeather =async ()=>{
           const response =await fetch(`${api.BASE}weather?q=${'korea'}&appid=${api.API_KEY}`)

           if(componentMouted){
               setData(await response.json());
           }
           return ()=>{
               componentMouted=false;
           }
       }
       fetchWeather();
   },[]);

   // let temp = (data.main.temp-273.15).toFixed(2);

    console.log(data)

   return(
        <div className="weather-container">

            <div className="top">
                <div className="location">
                    {data.name}
                </div>

                <div className="temp">

                </div>

                <div className="description">
                    Clouds
                </div>
            </div>

        </div>
    )
}

export default Form;