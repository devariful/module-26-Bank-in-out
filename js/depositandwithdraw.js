document.getElementById('btn-deposit').addEventListener('click' , function(){
    const initialDeposit = document.getElementById('deposit-field');
    const initialDepositstring = initialDeposit.value
    const initialDepositInt = parseFloat(initialDepositstring);
    console.log(initialDepositInt )


    // add initial deposit to deposit field 

    const initialDepositTotal = document.getElementById('deposit-total');
    const initialDepositTotalString = initialDepositTotal.innerText;
    const initialDepositTotalInt = parseFloat(initialDepositTotalString)
    const totalDeposit = initialDepositTotalInt+initialDepositInt;
    initialDepositTotal.innerText = totalDeposit;

    initialDeposit.value='';


    // add initial deposit to  total balance

    const initialBalance = document.getElementById('balance-total');
    const initialBalanceString = initialBalance.innerText;
    const initialBalanceInt = parseFloat(initialBalanceString);
    const balanceAfterDeposit = initialBalanceInt + initialDepositInt;

    initialBalance.innerText = balanceAfterDeposit;

})

// Grab input for withdrawal
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawValue = document.getElementById('withdrawal-amout');
    const withdrawValueString = withdrawValue.value;
    const withdrawValueInt = parseFloat(withdrawValueString);
// display withdrawal input to withdrawal area
    const withdrawalDisplay = document.getElementById('total-withdrawal');
    const withdrawalDisplayString = withdrawalDisplay.innerText;
    const withdrawalDisplayInt = parseFloat(withdrawalDisplayString);
    const totalWithdrawal = withdrawalDisplayInt + withdrawValueInt;
    withdrawalDisplay.innerText=totalWithdrawal;



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalInt = parseFloat(balanceTotalString);
    const balanceAfterWithdrawal = balanceTotalInt-withdrawValueInt
    balanceTotal.innerText =  balanceAfterWithdrawal;



    withdrawValue.value='';
})