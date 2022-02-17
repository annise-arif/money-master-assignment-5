document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeValue = document.getElementById('income-value');
    const incomeText = parseFloat(incomeValue.value);

    // total expenses section
    function getInputValue( id,){
        const input = document.getElementById(id);
        const amount = parseFloat(input.value);
        return amount;
    }

    
    const foodAmount = getInputValue('food');
    const rentAmount = getInputValue('rent');
    const clothesAmount = getInputValue('clothes')

    const allExpnsesAmount = foodAmount + rentAmount + clothesAmount;
    //update balance
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = allExpnsesAmount;
    const balance = document.getElementById('current-balance');
    balance.innerText = incomeText - allExpnsesAmount;
    
    


});