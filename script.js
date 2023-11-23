//Do the below programs in anonymous function and IIFE
// a.) Print odd numbers in an array
// anonymous function
var odd = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
        }
   }
    return result;
}
var arr = odd ([2,4,5,7,8]);
console.log(arr);
//IIFE function
(function odd(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
           console.log(arr[i]); 
        }
    }
    
})([2,4,5,6,7])
//--------------------------------------------------------------------------------------------------

// b.)convert All the string to title caps in string array
//anonymous function

var titlecase = function(str){
    var result = str.toUpperCase();
    return result;
    }
    var str = titlecase("welcome to FSD");
    console.log(str);

// IIFE function
(function titlecase(str){
    console.log(str.toUpperCase());
})("welcome to FSD");
//---------------------------------------------------------------------------------------------------

// c.) Sum of all the numbers in array
//anonymous function
var sum = function(arr){
    var result = 0;
    for(var i = 0; i<arr.length; i++){
        result+=arr[i];
    }
    return result;
}
var arr = sum([2,4,5]);
console.log(arr);

//IIFE function
(function sum(arr){
    var result = 0;
    for(var i = 0; i<arr.length; i++){
        result+=str[i];
    }
    console.log(result)
})([2,4,5])
//----------------------------------------------------------------------------------------------------

// d.) Return all the prime number in an array 
// anonymous function
var prime = function(arr){
var result = [];
    for(var i=0; i<arr.length; i++){
    count = 0;
        for(var j=1; j<=arr[i]; j++){
            if(arr[i]%j == 0){
                count++;
            }
       }
        if(count == 2){
           result.push(arr[i]);
        }
    }
    return result;
}
var arr = prime([2,3,7,6]);
console.log(arr);
// IIFE function
(function prime(arr){
    var result = [];
    for(var i=0; i<arr.length; i++){
        count = 0;
            for(var j=1; j<=arr[i]; j++){
                if(arr[i]%j == 0){
                    count++;
                }
           }
            if(count == 2){
               result.push(arr[i]);
            }
        }
        console.log(result);
})([2,3,7,6]);
//------------------------------------------------------------------------------------------------

// e.) Return  all the palindromes in an array
// anonymous function
var palindrome = function(str){
    var result = [];
    for(var i=0; i<str.length; i++){
        var rev = Array.from(str[i]).reverse().join('');
        if(str[i] == rev){
            result.push(str[i]);
        }
    }
    return result;
}
var str = palindrome(["malayalam","tamil"]);
    console.log(str);

//IIFE funcrion
(function palindrome(str){
    var result = [];
    for(var i=0; i<str.length; i++){
        var rev = Array.from(str[i]).reverse().join('');
        if(str[i] == rev){
            result.push(str[i]);
        }
    }
    console.log(result);
})(["malayalam","tamil"]);
//----------------------------------------------------------------------------------------------

// f.) Return median of two sored array of the same size
// anonymous function
var median = function(num1 ,num2){
    var con = num1.concat(num2).sort((a,b) => a-b);
    var length = con.length;
    if(length%2 == 0){
        var midindex1 = length/2-1;
        var mindindex2 = length/2;
        return (con[midindex1]+con[mindindex2])/2;
    }else{
        return(length/2);
    }
}
var num1 = [1, 3, 5];
var num2 = [2, 4, 6];
var result = median(num1,num2);
console.log(result);

//IIFE function
(function median(num1,num2){
    var con = num1.concat(num2).sort((a,b) => a-b);
    var length = con.length;
    if(length%2 == 0){
        var midindex1 = length/2-1;
        var mindindex2 = length/2;
        console.log((con[midindex1]+con[mindindex2])/2);
    }else{
        console.log(length/2);
    }

})([1,3,5])([2,4,6]);
//--------------------------------------------------------------------------------------------

//g.) remove duplicate from an array
//anonymous function
var removeDuplicate = function(arr){
    return[...new Set(arr)];
}
var arr = removeDuplicate([1,2,2,3,3,4]);
console.log(arr);
//IIFE function
(function removeDuplicate(str){
    console.log([...new Set(str)]);
})([1,1,2,2,3,3,4]);
//-------------------------------------------------------------------------------------------

//f.) Rotate an array by K times
// anonymous function
function rotateArray(arr, k) {
    var n = arr.length;
    k = k % n; 
    var rotatedPart = arr.splice(n - k);
    arr.unshift(...rotatedPart);
  
    return arr;
  }
  var originalArray = [1, 2, 3, 4, 5];
  var rotations = 2;
  var rotatedArray = rotateArray(originalArray, rotations);
  console.log(rotatedArray);

  //IIFE function
  (function rotateArray(arr ,k){
    var n = arr.length;
    k = k % n; 
    var rotatedPart = arr.splice(n - k);
    arr.unshift(...rotatedPart);
    console.log(arr);
  })([1,2,3,4,5],2);


