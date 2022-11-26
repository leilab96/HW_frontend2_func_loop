//Third Task

//Visszaadja a tömb elemeinek típusát egy másik új tömbben
function typeWriter(nums) {
  let typeList = [];
  for (let i = 0; i < nums.length; i++) {
    typeList.push(typeof nums[i]);
  }
  return typeList;
}

const x = [" ", 4, true, NaN];
console.log(typeWriter(x));
