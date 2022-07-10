export const constants=()=>{


    return Math.floor(
        Math.random()*(45-1+1)+1
    );
}


export const generateLottoNumbers=()=>{
    const randomNumbers = new Set();

    while(randomNumbers.size < 6){


        randomNumbers.add(constants());
    }

    return Array.from(randomNumbers);
}




export const LOTTO = Object.freeze({
    MIN_NUMBER: 1,
    MAX_NUMBER: 45,
    LENGTH: 6,
    UNIT_PRICE: 1000,
    MIN_PRICE: 1000,
    MAX_PRICE: 100000,
});