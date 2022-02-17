document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeValue = document.getElementById('income-value');
    const incomeText = parseFloat(incomeValue.value);
    if(isNaN(incomeText) ){
        alert("income text is not a number");
    }
    // total expenses section
    function getInputValue( id,){
        const input = document.getElementById(id);
        const amount = parseFloat(input.value);
        if(isNaN(amount)){
            alert("Is not a number Pleaze Enter the Valid Number");
        }
        return amount;       
    }

    
    const foodAmount = getInputValue('food');
    const rentAmount = getInputValue('rent');
    const clothesAmount = getInputValue('clothes');
    allExpensesAmount = foodAmount + rentAmount + clothesAmount;

    //update balance
  
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = allExpensesAmount;
    const balance = document.getElementById('current-balance');
    balance.innerText = incomeText - allExpensesAmount;
    
 
});