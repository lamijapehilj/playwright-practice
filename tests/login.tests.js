function sabiranje(a , b) {
return a + b
};

console.log(sabiranje(35, 2));



function returnNumBiggerThanTwo(arr) {

    for(var i = 0; i < arr.length; i++) {
    
        if(arr[i] > 2) {
            return arr[i];
        }
       
    }
return false
}

console.log(returnNumBiggerThanTwo([1, 2, 5, 7]) )// 5
console.log(returnNumBiggerThanTwo([0, 1, 2]) )   // false

console.log("nesto");
