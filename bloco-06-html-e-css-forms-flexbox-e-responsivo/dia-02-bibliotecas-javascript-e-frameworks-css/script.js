function handleSubmit (event) {
    event.preventDefault();
    const validation = validText();
    if ( validText === false) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    }
}

window.onload = function () {
    const clearSubmit = document.querySelector('#clear-btn');
    clearSubmit.addEventListener('click', clearForms);

    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click',handleSubmit);

    const acceptBtn = document.querySelector('#accept');
    acceptBtn.addEventListener('change', enableSubmit);
};

function clearForms () {
    const clearInput = document.querySelectorAll('input');
    const clearText = document.querySelector('textarea');
    for (let index=0; index < clearInput.length; index += 1) {
        const userInput = clearInput[index];
        userInput.value = '';
        userInput.checked = false;
    }
}

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const accept = document.querySelector('#accept');
  submitBtn.disabled = !accept.checked;
}

function validText () {
    const name = document.querySelector('#fullName').value.length;
    const invalidName = name < 10 || name > 40; 

    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || name > 50;

    const reason = document.querySelector('#question').value.length;
    const invalidReason = reason > 500;

    if ( invalidName || invalidEmail || invalidReason ) {
        return false;
    } else {
        return true;
    }
}