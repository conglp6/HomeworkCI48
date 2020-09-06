//Listen for submit event
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let fName = document.getElementById('firstname').value;
    let lName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('num').value;

    //addData values
    addData(fName, lName, email, phone);

    // Reset Registrationform
    document.getElementById('registrationform').reset();
}

let fBase = firebase.firestore().collection('users');
//add Data to Firebase
function addData(fName, lName, email, phone) {
    let object = {
        firstName: fName,
        lastName: lName,
        email: email,
        phoneNumber: phone
    }
    fBase.add(object);
}

// Đọc và console ra tất cả các bản ghi
async function readData() {
    let result = await fBase.get();
    for (let doc of result.docs) {
        console.log(doc.data());
    }
}

// Update tất cả 2 số đầu của phoneNumber = 84 
