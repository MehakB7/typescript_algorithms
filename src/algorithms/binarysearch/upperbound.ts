export const upperBound =  (array:number[], target:number): number =>{
    let low = 0;
    let high = array.length-1;
    while(low < high){
         let mid = Math.floor((high-low)/2) + low;
         if(array[mid] > target){
             high = mid;
         }else{
             low = mid+1;
         }
         
    }
    return low;
}

 console.log(upperBound([1,2,2,2,3,3,3,4], 3));