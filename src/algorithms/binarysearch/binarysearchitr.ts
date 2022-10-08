export const binarySearchItr =  (array:number[], target:number): number =>{
    let low = 0;
    let high = array.length-1;
    while(low <= high){
         let mid = Math.floor((high-low)/2) + low;
         if(array[mid] === target){
            return mid;
         }
         else if( array[mid] < target){
             low = mid+1;
         }else{
             high = mid-1;
         }
    }
    return -1;
}

// testcases 
 console.log(binarySearchItr([1,2,3,4,5,6], 3));
console.log(binarySearchItr([1,2,3,4,5,6], 7));