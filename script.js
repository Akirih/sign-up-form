const formInputs = document.querySelectorAll('.form');
formInputs.forEach(formInput => formInput.addEventListener('keyup', checkValue))


function checkValue (){   
    let input =  document.getElementById(this.id);
    if (input.value) {
        input.classList.add("has-text");
        if(input.id == "form-pw-confirm") checkPassword(input.value);
    }
    else {
        input.classList.remove("has-text");
    }
}

function checkPassword(value) {
    if (value == document.getElementById('form-pw').value) {
        document.getElementById('form-pw-confirm').classList.remove('not-match');
    }
}
