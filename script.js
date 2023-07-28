let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum); 

  let arr = [1, 2, 3, 4, 5];

let increasedArr = arr.map(item => item + 2);

console.log(increasedArr);