//Script to register user

function registerUsr(){
    const user = {
        Username :  username.value,
        Accountnumber : accountNumber.value,
        Password : password.value
    }

    if(user.Username.length == " " || user.Accountnumber.length == " " || user.Password.length == " " ){
        alert("Please enter the details");
    }

    else{
        if(user.Accountnumber in localStorage){
            alert("Username Already Exists")
        }

        else{
            localStorage.setItem(user.Accountnumber, (JSON.stringify(user)))
            alert("User Successfully registred")
        }
    }
}


//script for user validation
function loginUsr(){
    Accountnumber = acNumber.value;

    password = pswd.value;
    
    if(Accountnumber in localStorage){
        console.log("Account number found");
        
        
        user = JSON.parse(localStorage.getItem(Accountnumber));
        console.log(user);

        if(user.Password == password){
            console.log("Password validated");
            alert("User Verified");

            window.location = './user.html';
            return false; 
        }
        else{
            console.log("Invalid Password");
            alert("Invalid Password");

        }
    }

    else{
        alert("Account not found")
        
    }
    
}

//script for banking functions

/*For depositing money */
function deposit() {
    Accountnumber = acNumber.value;
    usrPwd = passwordD.value;
    console.log(usrPwd);

    if (Accountnumber in localStorage) {
        user = JSON.parse(localStorage.getItem(Accountnumber));
        console.log(user);

        if (user.Password == usrPwd) {
            console.log("Password validated");

            let newAmount = parseFloat(amountDeposit.value);  

            let currentBalance = parseFloat(user.Balance) || 0;  

            let updatedBalance = currentBalance + newAmount;  

            user.Balance = updatedBalance;  

            localStorage.setItem(Accountnumber, JSON.stringify(user));
            
            console.log("Amount Deposited Successfully");

            balance.innerHTML = `
                <div style="text-align: center;">
                    <h5>Your Current Balance: ${updatedBalance}</h5>
                </div>
            `;

            alert("Amount Deposited Successfully");

        } 
        
        else {
            console.log("Invalid Password");
            alert("Invalid Password");
        }
    } 
    
    else {
        alert("Account not found");
    }


    //document.getElementById("myForm").reset(); 
}

/*For withdrawing Money */
function withdraw() {
    Accountnumber = acNumber2.value;
    usrPwd = passwordW.value;
    console.log(usrPwd);

    if (Accountnumber in localStorage) {
        user = JSON.parse(localStorage.getItem(Accountnumber));
        console.log(user);

        if (user.Password == usrPwd) {
            console.log("Password validated");

            let withdrawAmount = parseFloat(amountWithdraw.value);  
            let currentBalance = parseFloat(user.Balance) || 0;  

            if (withdrawAmount <= currentBalance) {  
                let updatedBalance = currentBalance - withdrawAmount;  
                user.Balance = updatedBalance;  
                localStorage.setItem(Accountnumber, JSON.stringify(user));  
                
                console.log("Amount Withdrawn Successfully");

                balance.innerHTML = `
                    <div style="text-align: center;">
                        <h5>Your Current Balance: ${updatedBalance}</h5>
                    </div>
                `;
                alert("Amount Withdrawn Successfully");
            } 
            
            else {
                console.log("Insufficient Balance");
                alert("Insufficient Balance");
            }
        } 
        
        else {
            console.log("Invalid Password");
            alert("Invalid Password");
        }

    } 
    
    else {
        alert("Account not found");
    }

    //document.getElementById("myform2").reset();
}
