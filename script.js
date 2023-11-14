function isSameType(value1, value2) {
    //your js code here
    console.log(typeof value1)
    if(typeof value1 === typeof value2){
        return true;
    }
    return false
      
  }
  
  // do not change the code below.
  let value1 = prompt("Enter Start of the Range.");
  let value2 = prompt("Enter End Of the Range.");
  alert(isSameType(value1, value2));
  