document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);


    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDepositAmount;

    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal;

    // step 5  get current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);

    // calculate current total balance
    const currentBalanceTotal = balanceTotal + newDepositAmount;

    // set balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // clear field 

    depositField.value = '';

    // withdraw



})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const initialWithdrawal = document.getElementById('withdrawal-amout')
    const initialWithdrawalstring = initialWithdrawal.value
    initialWithdrawalintegar = parseFloat(initialWithdrawalstring);



    const totalWithdrawal = document.getElementById('total-withdrawal');
    const totalWithdrawalString = totalWithdrawal.innerText;
    const totalWithdrawalInt = parseFloat(totalWithdrawalString)
    const netTotalWithdrawal = totalWithdrawalInt + initialWithdrawalintegar;
    totalWithdrawal.innerText = netTotalWithdrawal;


    const initialBalanceTotal = document.getElementById('balance-total');
    initialBalanceTotalstring = initialBalanceTotal.innerText;
    iniitialBalanceTotalInt = parseFloat(initialBalanceTotalstring);
    const finalBalanceafter=iniitialBalanceTotalInt-initialWithdrawalintegar;
    initialBalanceTotal.innerText=finalBalanceafter;

 






    initialWithdrawal.value = '';



})
