// #1 

let arr = ["3", "456", "2", "655700", "5668509", "78984160", "56880"];

function check1(array) {
  return array.reduce((acc, element) => {
    if (element.startsWith('2') || element.startsWith('4')) {
      acc.push(element);
    }
    return acc;
  }, []);
}

console.log(check1(arr));

function check2(array) {
  return array.filter(element => parseInt(element) > 5);
}

console.log(check2(arr));




// #2

function stringFunc(input) {
  if (typeof input !== 'string') {
      return "Аргумент должен быть строкой";
  }

  let trimmedString = input.trim();

  if (trimmedString.length > 30) {
      trimmedString = trimmedString.slice(0, 30) + '...';
  }

  return trimmedString;
}

console.log(stringFunc(123)); // "Аргумент должен быть строкой"
console.log(stringFunc("     Строка длиной более 30 знаков, с пробелами в начале и конце.   "));
console.log(stringFunc("    Короткая строка"));