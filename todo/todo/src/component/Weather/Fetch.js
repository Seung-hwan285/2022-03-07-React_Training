const api ={
    key : 'a536cbda68541f2066e2a1fd221d55d5',
    base: 'https://api.openweathermap.org/data/2.5/',
};

const search =()=>{


        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then((res)=>res.json())
            .then((result)=>{
               console.log(result);
            });

}

