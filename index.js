document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeText = document.getElementById('income-value');
    const incomeValue = parseFloat(incomeText.value);
    if(isNaN(incomeValue)){
        alert("income is not a number");
    }else if(!isNaN(incomeValue) && incomeValue < 0){
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
    balance.innerText = incomeValue - allExpensesAmount;   
 
});

 //extra saving section

 document.getElementById('save-btn').addEventListener('click', function(){
    const incomeText = document.getElementById('income-value');
    const incomeValue = parseFloat(incomeText.value);

    const savingField = document.getElementById('saving-amount');
    // const savingValue = savingField.innerText;

    const saveInput = document.getElementById('saving-input');
    const saveValue = parseFloat(saveInput.value);
    
    const savingAmount = incomeValue / saveValue;
    savingField.innerText = savingAmount;

    // const remainingField = document.getElementById('remaining-balance');
   

})