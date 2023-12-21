//Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array

const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(num){
    if(num %2 !==0){
        console.log(num);
    }
});

//2.Convert all the strings to title caps in a string array

/*const stringArray = ["apple", "banana", "orange", "grape"];
const titleCaseArray = stringArray.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});
console.log(titleCaseArray);*/

//3.Sum of all numbers in an array

/*const sum = numbers.reduce(function(accumulator, currentValue){
return accumulator + currentValue;
  },0);
  console.log("Sum:", sum);*/

//4.Return all the prime numbers in an array

/*const primeNumbers = numbers.filter(function(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});

console.log("Prime Numbers:", primeNumbers);*/

//5.Return all the palindromes in an array

/*const words = ["level", "hello", "civic", "world", "deed"];
const palindromes = words.filter(function(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  });
  
  console.log("Palindromes:", palindromes);*/

 // 6.Return median of two sorted arrays of the same size.

  const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = (function mergeSortedArrays(arr1, arr2) {
      let merged = [];
      let i = 0;
      let j = 0;
  
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
  
     
      merged = merged.concat(arr1.slice(i), arr2.slice(j));
  
      return merged;
    })(nums1, nums2);
  
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
  
    return length % 2 === 0
      ? (mergedArray[middle - 1] + mergedArray[middle]) / 2
      : mergedArray[middle];
  };
  
  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];
  const median = findMedianSortedArrays(nums1, nums2);
  
  console.log("Median:", median);

 // 7.Remove duplicates from an array

 const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 1, 6, 7, 8, 3];

const uniqueArray = arrayWithDuplicates.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});

console.log("Array with Duplicates:", arrayWithDuplicates);
console.log("Array without Duplicates:", uniqueArray);

//8.Rotate an array by k times

const rotateArray = function(arr, k) {
    const len = arr.length;
    k = k % len; // Ensure k is within the array length
  
    return (function() {
      const rotated = arr.slice(len - k).concat(arr.slice(0, len - k));
      return rotated;
    })();
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotations = 2;
  
  const rotatedArray = rotateArray(originalArray, rotations);
  console.log("Original Array:", originalArray);
  console.log("Rotated Array:", rotatedArray);


  // Do the below programs in arrow functions.
//1.Print odd numbers in an array
//const numbers = [21,22,23,24,25,26,27,28,29,30];
const oddNumbers = numbers.filter(number =>number %2 !==0 );{
console.log(oddNumbers);
};

//2.Convert all the strings to title caps in a string array

const stringArray = ["apple","cherry","orange","dates"];
const titleCapsArray = stringArray.map( word => word.charAt(0).toUpperCase()+word.slice(1));
console.log(titleCapsArray);

//3.Sum of all numbers in an array

//const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//4.Return all the prime numbers in an array

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);

//5. Return all the palindromes in an array

const words = ["level", "hello", "racecar", "world", "madam"];
const isPalindrome = str => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const palindromeWords = words.filter(isPalindrome);
console.log(palindromeWords);