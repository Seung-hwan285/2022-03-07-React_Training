import React, { Component } from 'react';



const getWinNumbers=()=>{
    console.log('getWinNumbers');

    const candidate = Array(45).fill().map((v,i)=>i+1);


    console.log(candidate);
    const shiffle=[];


    while (candidate.length >0){
        shiffle.push(candidate.splice(Math.floor(Math.random()* candidate.length),1)[0]);
    }

}

const Lotto =()=>{

    getWinNumbers();
}


export default Lotto;