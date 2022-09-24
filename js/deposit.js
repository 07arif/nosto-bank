// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log('btn click');
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  const previousDepositString = parseFloat(previousDepositTotal);
  // calculate new deposit total
  const newDepositTotal = previousDepositString + newDepositAmount;
 
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const previousBalanceTotalstring = parseFloat(previousBalanceTotal);
  const newBalanceTotal = previousBalanceTotalstring + newDepositAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});
