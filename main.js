document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getInputValue('name');
    const age = getInputValue('age');

    console.log(`${name} is ${age} years old.`);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}