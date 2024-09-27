const getCompareString = (str, maxLength)=>{
  if(String.length(str) <= maxLength){
    return true;
  }
  return false;
};
getCompareString('проверяемая строка', 20);
