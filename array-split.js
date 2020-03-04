const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);    // slice can count which index you declared & go to end declared index 
console.log(part);

  const removed = nums.splice(2, 5);  // splice can remove/delete declared index & count to end index.
  console.log(removed);
  console.log(nums);


 const add = nums.splice(2, 3, 33);  // splice can add declared index & count to end index.
 console.log(add);
 console.log(nums)

const together = nums.join("");  // (""),(" "),(",")
console.log(together);

