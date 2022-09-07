async function logInforum(event){
    event.preventDefault();
    const username = document.querySelector("#username-login").ariaValueMax.trim();
    const password = document.querySelector("#password-login").ariaValueMax.trim();

    if (username && password){
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.replace('/homepage')
        }else{
            alert(response.statusText)
        }
    }
}
document.quesrySelector('#login-form')
.addEventListener('click', logInForum)