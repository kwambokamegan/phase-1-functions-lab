// Define distanceFromHqInBlocks function
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42); // Scuber's headquarters is at block 42
}

// Define distanceFromHqInFeet function using distanceFromHqInBlocks
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264; // 1 block = 264 feet
}

// Define distanceTravelledInFeet function
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Define calculatesFarePrice function
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Export the functions to be accessible from outside
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};