const api ={
    API_KEY : 'a536cbda68541f2066e2a1fd221d55d5',
    BASE: 'https://api.openweathermap.org/data/2.5/',
};

export const search =()=>{


        fetch(`${api.BASE}weather?q=${'korea'}&appid=${api.API_KEY}`)
            .then((res)=>res.json())
            .then((result)=>{
               console.log(result);
            });

}




