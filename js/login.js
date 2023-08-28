// add event handler
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit buton clicked')
    // step-2  grab email & password
    const emailfield= document.getElementById('user-email');
    const email = emailfield.value;
    console.log(email)
    const passfield= document.getElementById('user-pass');
    const password = passfield.value;
    console.log(password)

// verify email pass

    if (email=== 'abcd@gmail.com' && password==='abcd' ){
        window.location.href = 'bank.html';
    }else{
        alert('tui password vule gasos , toke ami tajjo korrlam')
    }

    
})