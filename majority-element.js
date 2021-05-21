(function(){
  /*
  Find the majority element in the array. 
  A majority element in an array A of size N is an element that appears more than N/2 times in the array.
   */

  const a = [3, 3, 4, 2, 4, 4, 2, 4, 4],
      majorityCount = Math.floor(a.length/2) + 1;

    // Creates a key-value pair of array elements and their frequencies
    const counter = () => [...a].reduce((arr, char) => (arr[char] = arr[char] + 1 || 1) && arr, {}),
      freqCount = counter();

    let keyVal = 0;
    const isMajorityElement = Object.keys(freqCount).some((key) => {
      keyVal = key;
      return freqCount[key] >= majorityCount;
    });

    (isMajorityElement) ? console.log(keyVal) : '';

}());