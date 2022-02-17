document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeValue = document.getElementById('income-value');
    const incomeText = parseFloat(incomeValue.value);
    if(isNaN(incomeText) ){
        alert("income is not a number");
    }else if(!isNaN(incomeText) && incomeText < 0){
        alert("Please Enter a Positive Number");
    }
    // total expenses section
    function getInputValue( id,){
        const input = document.getElementById(id);
        const amount = parseFloat(input.value);
        if(isNaN(amount)){
            alert("Is not a number Pleaze Enter the Valid Number");
        }else if(!isNaN(amount) && amount < 0){
            alert("Please Enter a Positive Number to the Expenses field");
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
    
    //extra saving section

    // document.getElementById('calculate-btn').addEventListener('click', function {
    //     const savingAmount = document.getElementById('saving-amount').innerText;
    //     savingAmount =
    // });

    // I haven't enough time to do the extra work
 
});