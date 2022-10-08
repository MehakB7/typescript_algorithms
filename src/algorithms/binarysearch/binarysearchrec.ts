const binarySearchRec = (array:number[], target:number)=>{

    const binarySearch = (start:number, end:number):number=>{
        if(start > end){
             return -1;
        }else{
            let mid = Math.floor((end-start)/2) + start;
          
            if(array[mid] === target){
                return mid;
            }else if( array[mid] < target){
                 return binarySearch(mid +1, end);
            }
            return binarySearch(start, mid-1);
        }

    }

    return binarySearch(0, array.length-1);

}

console.log("inside this binary search", binarySearchRec([1,2,3,4,5,6,7], 3));


