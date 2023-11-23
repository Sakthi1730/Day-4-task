// Do the below programs in arrow function
// a.) Print odd numbers in an array
var  odd = (arr) =>{
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
//--------------------------------------------------------------------------
//b.)convert All the string to title caps in string array
var titlecaps = (str) =>{
    var result = str.toUpperCase();
    return result;
    }
    var str = titlecaps("welcome to FSD");
    console.log(str);
//--------------------------------------------------------------------------

//c.) Sum of all the numbers in array
var sum = (arr)=>{
    var result = 0;
    for(var i = 0; i<arr.length; i++){
        result+=arr[i];
    }
    return result;
}
var arr = sum([2,4,5]);
console.log(arr);
//-------------------------------------------------------------------------
//d.)Return all the prime number in an array 

var prime = (arr)=>{
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
//----------------------------------------------------------------------

//e.)Return  all the palindromes in an array

var palindrome = (str)=>{
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


