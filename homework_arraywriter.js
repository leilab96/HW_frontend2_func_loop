//Second Task

//Tömb elemeit és indexét íratja ki
function arrayWriter(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i + 1 + ". " + nums[i]);
  }
}

const names = ["Peter", "Kate", "John"];
arrayWriter(names);
