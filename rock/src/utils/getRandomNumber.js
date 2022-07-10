const getRandomNumber=()=>{


    return Math.floor(


        Math.random()*(45-1+1)+1
    );
}


export const generateLottoNumbers=()=>{
    const randomNumbers = new Set();


    while(randomNumbers.size < 6){

        randomNumbers.add(getRandomNumber());
    }

    return Array.from(randomNumbers);
}
