// Good Luck 💪🏾
function secondLargest(array){
    let firstlarnum=(secondLarnum= Math.min(...array))
    for(let i=0; i<array.length; i++){
        if(array[i]>firstlarnum){
            secondLarnum=firstlarnum
            firstlarnum=array[i]
        }
        else{
            if(array[i]>secondLarnum && array[i] !==firstlarnum){
                secondLarnum=array[i]
            }
        }
    }
   
return secondLarnum

}
console.log (secondLargest([23, 66, 50, 12, 6]))
console.log (secondLargest([65, 34, 100, 22, 85]))
console.log (secondLargest([67, 22, 19, 12, 80]) )