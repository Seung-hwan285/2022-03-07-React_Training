import React, {useState} from "react";



const api ={
    API_KEY : 'cd439d0d8386ee860ee3c082e826e1ca',
    BASE: 'https://api.openweathermap.org/data/2.5/',
};


// [x]api 데이터 출력
// [] 데이터 form에 넘겨주기

const Form =()=>{





   const data= fetch(`${api.BASE}weather?q=${'korea'}&appid=${api.API_KEY}`)
        .then((res) => res.json())
        .then((data)=>console.log(data));


   return(
        <div>

        </div>
    )
}

export default Form;