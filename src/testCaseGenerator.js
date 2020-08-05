export const generateNumArray = (arraySize, minIn, maxIn, includeNull, sorted, repeated) => {
    if( minIn > maxIn){
        let temp = minIn;
        minIn = maxIn;
        maxIn = minIn;
    }

    if( minIn < -1000000000){
        minIn = -1000000000;
    }
    if( minIn > 1000000000){
        minIn = 1000000000;
    }
    if( maxIn < -1000000000){
        maxIn = -1000000000;
    }
    if ( maxIn > 1000000000){
        maxIn = 1000000000;
    }
    if( arraySize < 1){
        arraySize = 1;
    }
    if( arraySize > 100000){
        arraySize = 100000;
    }
    if( minIn < 0 && maxIn < 0){

    }

    let temp = new Array(arraySize);
    let seenValues = [];
    let negative = (minIn < 0 && maxIn < 0) ? true : false;
    let containsRepeated = false;


    if(negative){
        let temp = -minIn;
        minIn = -maxIn;
        maxIn = temp;
    }

    for(let i = 0; i < arraySize; i++){
        let rand = ( Math.floor( Math.random() * (maxIn - minIn + 1) + minIn));

        if(!repeated){
            if( seenValues.includes(rand)){

                let maxIterations = 1000;

                while(!seenValues.includes(rand) && maxIterations > 0){

                    rand = ( Math.floor( Math.random() * (maxIn - minIn + 1) + minIn));
                    maxIterations--;

                }
                if(seenValues.includes(rand)){
                    containsRepeated = true;
                }
            }
        }
        if(containsRepeated){
            alert('As range is way to small for the size of this array, it will contain duplicated values');
        }
        temp[i] = (negative) ? -rand : rand;
        seenValues.push((negative) ? -rand : rand);

    }
    return temp.join();
    
}


