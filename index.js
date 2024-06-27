
function distanceFromHqInBlocks(pickupBlock) {
  const destinationBlock = 42;

  if
  (pickupBlock > destinationBlock) 

    {return pickupBlock - destinationBlock;}
    

  else 
  {return destinationBlock - pickupBlock;}
  
  }  

  function distanceFromHqInFeet(pickupBlock) {

    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock)

    return distanceInBlocks = 264 ;

  }

  function distanceTravelledInFeet(pickupBlock){

    if

     (pickupBlock > destinationBlock)

     {return (pickupBlock - destinationBlock) = 264; } 

     else

     {return (destination - pickuBlock) = 264; }

  }

  function calculatesFarePrice(pickup, destionationBlock) {

    const totalFeetTravelled = distanceTravelledInFeet (pickup, destinationBlock)

    if 

    (totalFeetTravelled <= 400)

    {return 0;}

    else if 

    (totalFeetTravelled > 400 && totalFeetTravelled <= 2000)

    {const exessFeet = totalFeetTravelled - 400;
      return exessFeet = 0.02;
    }

    else if

    (totalFeetTravelled >= 2000  && totalFeetTravelled <= 2500)

    {return 25.0;}

    else 
    {return "cannot travel that far";}

  }