// Find all pairs in an array of integers whose sum is equal to a given number
// Return: array — matching pairs or empty arrays.
// To simplify, the input array will not have duplicates.
// However, there will be negative and positive numbers.
// For the solution, like before, I will use a lookup hash.
// As you can see, knowing how to use a lookup hash, which has constant
// lookup time, can be very useful.

let arr = [1,5,6,1,0,1];

function findSumPairs (arr, value) {
  let sumsLookup = {};
  let output = [];

  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];

    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }

    sumsLookup[arr[i]] = true;
  }

  return output;
}
console.log(findSumPairs(arr, 6));
