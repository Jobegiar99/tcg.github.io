var chance = require('chance').Chance();


export const arrayGeneration = (dataType, arraySize, minIn, maxIn, sorted, repeated,decimals,lower,upper,number,special, strLength) => {
    let testCase =  "";
    let charPool = "";

    if(lower)
        charPool += 'abcdefghijklmnopqrstuvwxyz';

    if(upper)
        charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(number)
        charPool += '0123456789';
    
    if(special)
        charPool += '!@#$%^&*()';

    
    charPool = charPool.toString();

    if( minIn < -1000000000) minIn = -1000000000;

    if( minIn > 1000000000) minIn = 1000000000;
    
    if( maxIn < -1000000000) maxIn = -1000000000;
    
    if ( maxIn > 1000000000) maxIn = 1000000000;
    
    if ( minIn > maxIn){

        let temp = maxIn;
        maxIn = minIn;
        minIn = temp;
    
    }

    testCase = generateArray(dataType, arraySize, minIn, maxIn,sorted,repeated,decimals,charPool,strLength);

    
    return testCase;
}


let generateArray = (dataType,arraySize, minIn, maxIn,sorted, repeated,decimals, charPool,strLength) => {

    let temp = new Array(arraySize);
    let seen = new Array(arraySize);
    let minMaxTurn = false;

    for( let i = 0; i < arraySize; i++){
        let rand = choiceGenerator(dataType,decimals,minIn,maxIn, strLength) ;

        if((!repeated) && (dataType == 'float' || dataType == 'int')){

            if( seen.includes(rand) ){
                let limit = 10000;

                while(seen.includes(rand) && limit > 0){

                    rand = choiceGenerator(dataType,decimals,minIn,maxIn, strLength);
                    limit--;
                    
                }
                if(seen.includes(rand)){
                    minIn--;
                    maxIn++;

                    if(minMaxTurn) 
                        rand = minIn;

                    else   
                        rand = maxIn;

                    minMaxTurn = !minMaxTurn;

                }
            }
            seen[i] = rand;



        }else if(dataType == 'char'){

            if(!charPool.includes(rand)){
                while(!charPool.includes(rand)){
                    rand = choiceGenerator(dataType,decimals,minIn,maxIn,charPool, strLength);
                }
            }

        }else{
            let found = true;
            /*while(found){
                let changed = false;
                for(let i = 0; i < rand.length; i++){
                    if(!charPool.includes(rand[i])){
                        rand = choiceGenerator(dataType, decimals,minIn,maxIn,charPool, strLength);
                        changed = true;
                        break;
                    }
                }
                if (!changed){
                    found = false;
                }

            }*/
        }
        temp[i] = rand;

    }

    if(sorted)
        temp = temp.sort(function(a, b){return a-b});
    
    let testCase = temp.join();

    if( dataType == 'char')
        return fixCharTest(testCase);
    
    return testCase;

}

let choiceGenerator = (dataType, decimals, minIn, maxIn, charPool, strLength) =>{

    if(dataType == 'int'){

        return chance.integer({ min: parseInt(minIn), max: parseInt(maxIn) });

    }else if ( dataType == 'float'){

        return chance.floating({ min: parseFloat(minIn), max: parseFloat(maxIn), fixed: decimals });
    
    }else if ( dataType == 'bool'){

        return chance.bool();

    }else if ( dataType == 'char'){

        return chance.character({pool : charPool});

    }else{
        return chance.string({pool : charPool, length : strLength})
    }


}

let fixCharTest = (test) =>{
    let temp = "";
    for(let i = 0; i < test.length; i++){

        if( i % 2 == 0){
            temp += "\'" + test[i] + "\'"
        }else{
            temp += test[i];
        }

    }
    return temp;
}



