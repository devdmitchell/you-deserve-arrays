/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(arr){
  return arr[0]
}
function getLastItemFrom(arr2){
  return arr2[arr2.length - 1]
}
function getIndex3(arr3){
  if (arr3.length > 4){
    return arr3[3]
  } else {
    return arr3[arr3.length - 1]
  }
}
function isLongList(arr4){
  return arr4.length > 10 || arr4.length === 10
}

function firstItemIsNumber(arr5){
  return typeof arr5[0] === number
}

function secondCharOfThirdString(arr6){
  return arr6[2][1]
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
