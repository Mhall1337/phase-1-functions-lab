const hq = 42

const distanceFromHqInBlocks = (destBlock) =>{
    if(hq > destBlock){
        return hq - destBlock
    }
    else if(hq < destBlock){
        return destBlock - hq
    }
}

const distanceFromHqInFeet = (block) =>  distanceFromHqInBlocks(block) * 264


const distanceTravelledInFeet = (start, end) => {
    if(start > end){
        return (start - end) * 264
    }
    else if(start < end){
        return (end - start) * 264
    }
}

const calculatesFarePrice = (start, destination) => {
   const ride  = distanceTravelledInFeet(start, destination)
    if (ride < 400){
       return 0
   }
   else if(ride > 400 && ride <2000){
       return (ride - 400) * .02
   }
   else if(ride > 2000 && ride < 2500){
       return 25
   }
   else{ return 'cannot travel that far'}
}