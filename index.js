// Code your solution in this file!
const headquarters = 42
function distanceFromHqInBlocks(destination){
    if (headquarters - destination >= 0){
        return headquarters - destination;
      }
      else{
        return (headquarters - destination)*-1
      }
 }

function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination)*264
 }

function distanceTravelledInFeet(start, end){
    if (start - end >= 0){
        return (start - end)*264;
      }
      else{
        return ((start - end)*-1) *264
      }
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end)<=400){
        return 0
    }
    else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000){
        return (distanceTravelledInFeet(start, end) -400 ) * .02
    }
    else if(distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500){
        return 25
    }
    else return 'cannot travel that far'
}
