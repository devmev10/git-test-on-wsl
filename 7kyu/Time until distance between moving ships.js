// Two fishing vessels are sailing the open ocean, both on a joint ops fishing mission.

// On a high stakes, high reward expidition - the ships have adopted the strategy of hanging a net between the two ships.

// The net is 40 miles long. Once the straight-line distance between the ships is greater than 40 miles, the net will tear, and their valuable sea harvest will be lost! We need to know how long it will take for this to happen.

// Given the bearing of each ship, find the time in minutes at which the straight-line distance between the two ships reaches 40 miles. Both ships travel at 90 miles per hour. At time 0, assume the ships have the same location.

// Bearings are defined as degrees from north, counting clockwise. These will be passed to your function as integers between 0 and 359 degrees. Round your result to 2 decmal places.

// If the net never breaks, return float('inf')

// My Solution
function findTimeToBreak(bearingA, bearingB) {
  if (bearingA === bearingB) return Infinity;
  const angle = ((bearingA - bearingB) / 180) * Math.PI;
  const route = Math.sqrt(800 / (1 - Math.cos(angle)));
  return Math.round((route / 90) * 60 * 100) / 100;
}
