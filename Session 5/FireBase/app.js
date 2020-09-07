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

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    // Reset Registrationform
    document.getElementById('registrationform').reset();
}

let fBase = firebase.firestore().collection('users');
// Add Data to Firebase
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

async function update() {
    let result = await fBase.get();
    for (let doc of result.docs) {

        // Lấy field phoneNumber, rồi update tất cả value với 2 đầu số là 84
        let phone = doc.data().phoneNumber;
        let strPhone = phone.toString();
        // let x = strPhone.replace(strPhone.charAt(0), '8');
        // let y = x.replace(x.charAt(1), '4');
        let x = "84" + strPhone.slice(2);
        let newPhone = parseInt(x);
        console.log(newPhone);

        // Update to Firebase
        await fBase.doc(doc.id).update({
            phoneNumber: newPhone
        })
    }
}

// Xoá các bản ghi có tên lastName trùng nhau
/*Cách làm: tạo 1 mảng chứa các lastName trùng nhau, sau đó tiến hành xoá tất cả các bản ghi
có lastName == các phần tử của mảng*/

async function deleteData() {
    let result = await fBase.get();
    console.log(result);
    let arrDel = []; // mảng chứa các lastName trùng nhau

    for (let i = 0; i < result.docs.length; i++) {
        for (let j = i + 1; j < result.docs.length; j++) {
            if (result.docs[i].data().lastName === result.docs[j].data().lastName) {
                arrDel.push(result.docs[i].data().lastName);
                console.log(arrDel);
                // break;
            }
        }
    }

    for (i = 0; i < arrDel.length; i++) {
        result = await fBase.where('lastName', '==', arrDel[i]).get();
        for (let doc of result.docs) {
            await fBase.doc(doc.id).delete();
        }
    }
}
