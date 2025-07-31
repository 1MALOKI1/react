///function Strstr(str1,str2){
   /// let s=" "
    ///for (let i=0;i<str1.length;i++){
       /// if (str2.includes(str1[i])){
          //  s= str1.slice(i,i+ (str2.length))
            //if(s==str2){
              //  return i
            //}
        //}
    //}
    //return -1
//}


//console.log(Strstr('malokiabbawi','maloki'));

function Concat( arr1 ,arr2){
    arr1.sort();
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==0){
arr1.shift();
return arr1+","+arr2
    } else if(arr2==[]){
        return arr1
    }
}return arr1
}
console.log(Concat([1],[]));
console.log(Concat([0],[1]));
console.log(Concat([1,2,3,0,],[4,5,6]));