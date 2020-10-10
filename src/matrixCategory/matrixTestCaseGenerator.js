var chance = require('chance').Chance();

export const matrixGenerator = (dataType, width, height, minIn, maxIn, decimals, strLength) =>{
    
    if( width < 1      ) width = 1;
    if( height < 1     ) height = 1;
    if ( width > 1000  ) width = 1000;
    if ( height > 1000 ) height = 1000;
   
    if(decimals < 1) decimals = 1;
   
    if( decimals > 10) decimals = 10;
   
    if( strLength < 1) strLength = 1;
   
    if( strLength > 1000) strLength = 1000;
    
    if( minIn < -1000000000) minIn = -1000000000;
   
    if( minIn > 1000000000) minIn = 1000000000;
    
    if( maxIn < -1000000000) maxIn = -1000000000;
    
    if ( maxIn > 1000000000) maxIn = 1000000000;
   
}

let generateArray = (dataType,arraySize, minIn, maxIn,sorted, repeated,decimals, charPool,strLength) => {

    let temp = new Array(arraySize);
    let seen = new Array(arraySize);
    let minMaxTurn = false;
    
    for( let i = 0; i < arraySize; i++){
        
        let rand = choiceGenerator(dataType,decimals,minIn,maxIn, charPool,strLength) ;
        
        if((!repeated) && (dataType == 'float' || dataType == 'int')){

            if( seen.includes(rand) ){
                let limit = 10000;

                while(seen.includes(rand) && limit > 0){

                    rand = choiceGenerator(dataType,decimals,minIn,maxIn,charPool, strLength);
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

        }else if(dataType == 'string'){

            let found = true;
            while(found){
                let changed = false;
                for(let i = 0; i < rand.length; i++){
                    if( charPool.indexOf(rand[i]) == -1){
                        rand = choiceGenerator(dataType, decimals,minIn,maxIn,charPool, strLength);
                        changed = true;
                        break;
                    }
                }
                if (!changed){
                    found = false;
                }
            }

        }
        temp[i] = rand;

    }

    if(sorted)
        temp = temp.sort(function(a, b){return a-b});
    
    let testCase = temp.join();

    if( dataType == 'char')
        return fixCharTest(testCase);
    if(dataType == 'string')
        return fixStringTest(testCase,strLength);
    
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
        
        return chance.string({ pool: charPool,length : strLength});
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

let fixStringTest = (test, len) =>{
    let temp = "";
    let count = 0;
    for(let i = 0; i < test.length;i++, count++){
        if(count % len  == 0){
            temp += '\"' + test[i];
        }else if(count % len == len - 1){
            temp += test[i] + '\"';
            count = -2;
        }else{
            temp += test[i];
        }
    }
    if(temp[temp.length -1] != '\"'){
        temp += "\"";
    }
    return temp;
}



