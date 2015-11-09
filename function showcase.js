//remove all instances of a given value from an array

function removeValueFromArray (arrayToEdit, removeValue)
{
  var absent = -1;
  
  while (arrayToEdit.indexOf(removeValue) != absent)
  {
    arr.splice(arrayToEdit.indexOf(removeValue),1);
  }    
}