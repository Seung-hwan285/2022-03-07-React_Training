export const LOTTO_UNIT_PRICE =1000;
export const MIN_MONETARY_UNIT=1;


export const MESSAGE ={

    INVALID_PURCHASE_AMOUNT_UNDER_MONETARY_UNIT: '최소 화폐단위 미만의 금액은 입력이 불가합니다.',
    INVALID_PURCHASE_AMOUNT_UNDER_LOTTO_UNIT_PRICE: '1,000원 미만의 금액을 입력이 불가합니다.',

    PURCHASE_AMOUNT_HAS_CHANGE:(change)=>
        `입력된 금액에서 ${change}원을 제외한 금액으로 로또를 구매했습니다 \n거스름돈 챙겨가세요 `


};

export const constants=()=>{


    return Math.floor(
        Math.random()*(45-1+1)+1
    );
}


export const generateLottoNumbers=()=>{
    const randomNumbers = new Set();

    while(randomNumbers.size <6){
        randomNumbers.add(constants());
    }
    return Array.from(randomNumbers);
}



export const LOTTO= Object.freeze({

    MIN_NUMBER : 1,
    MAX_NUMBER : 45,
    LENGTH : 6,
    UNIT_PRICE : 1000,
    MIN_PRICE : 1000,
    MAX_PRICE : 100000,
})





export const LOTTO_NUMBER_SEPARATOR=', ';

