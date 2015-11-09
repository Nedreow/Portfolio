//remove all instances of a given value from an array

function removeValueFromArray (arrayToEdit, removeValue)
{
  var absent = -1;
  
  while (arrayToEdit.indexOf(removeValue) != absent)
  {
    arr.splice(arrayToEdit.indexOf(removeValue),1);
  }
  
  return arrayToEdit;
}

//Return binary 
function integerToBinary(integerToTranslate)
{
  //find highest multiple of two that is less than the integer
  powerOf2 = lowerPowerOf2(integerToTranslate);
  
  binaryNumber = '';
  
  while (integerToTranslate != 0)
  {
    if (powerOf2 <= integerToTranslate)
    {
      integerToTranslate = integerToTranslate - powerOf2;
      
      binaryNumber.concat('1');
    }
    else
    {
      binaryNumber.concat('0');
    }
    powerOf2 = powerOf2/2;
  }
  
  return binaryNumber;
}

function lowerPowerOf2(limitInteger)
{
  //find highest multiple of two that is less than the integer
  var multipleOf2 = 1;
  var halfInteger = limitInteger / 2;
  
  while (multipleOf2 < halfInteger)
  {
    multipleOf2 = multipleOf2 + multipleOf2;
  }
  return multipleOf2;
}