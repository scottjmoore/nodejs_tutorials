var firebaseConfig = {
    apiKey: "AIzaSyBK1HAJDBjfabhJF0Id67YER_bXJRRcrXs",
    authDomain: "testapp-7d530.firebaseapp.com",
    databaseURL: "https://testapp-7d530.firebaseio.com",
    projectId: "testapp-7d530",
    storageBucket: "testapp-7d530.appspot.com",
    messagingSenderId: "429130421915",
    appId: "1:429130421915:web:3314ca66f9e1c79c"
};

firebase.initializeApp(firebaseConfig);

var testCollectionRef = firebase.database().ref('test');

document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getInputValue('name');
    const age = getInputValue('age');

    console.log(`${name} is ${age} years old.`);
    
    saveNameAge(name, age);

    document.querySelector('.alert').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('form').reset();
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function saveNameAge(name, age) {
    var newCollectionRef = testCollectionRef.push();

    newCollectionRef.set({
        name: name,
        age: age
    });
}