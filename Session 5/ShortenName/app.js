function yes() {
    let name = document.getElementById("fname").value;
    // Remove whitespace from both sides of name:
    nameNo = name.trim();
    // Chuyển name về viết thường 
    let nameLow = nameNo.toLowerCase();
    // Xoá hết whitespace trong name và chuyển name vể array
    let arr = nameLow.split(" ");
    // Lấy phần FirstName của ShortenName
    let arrFirst = arr[0];
    let arrFirstSplit = arr[0].split("");
    console.log(arrFirstSplit);

    // Tạo mảng để chứa FirstName của ShortenName
    let shortenFirst = [];

    // Mảng chứa các ký tự nguyên âm
    let arrVowels = ['a', 'á', 'à', 'ả', 'ã', 'ạ',
        'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ',
        'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ',
        'e', 'é', 'è', 'ẻ', 'ẽ', 'ẹ',
        'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ',
        'i', 'í', 'ì', 'ỉ', 'ĩ', 'ị',
        'o', 'ó', 'ò', 'ỏ', 'õ', 'ọ',
        'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ',
        'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ',
        'u', 'ú', 'ù', 'ủ', 'ũ', 'ụ',
        'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự'];

    for (let i = 0; i < arrFirstSplit.length; i++) {
        for (let j = 0; j < arrVowels.length; j++) {
            if (arrFirstSplit[i] == arrVowels[j]) {
                console.log(i);
                arrFirstSplit.splice(i, arrFirstSplit.length - i);
                shortenFirst = arrFirstSplit;
                console.log(shortenFirst);
            }
        }
    }


    // Lấy phần LastName của ShortenName
    let arrLast = arr[arr.length - 1];
    let arrLastSplit = arr[arr.length - 1].split("");
    console.log(arrLastSplit);
    // Tạo mảng để chứa LastName của ShortenName
    let shortenLast = [];

    for (let i = 0; i < arrLastSplit.length; i++) {
        for (let j = 0; j < arrVowels.length; j++) {
            if (arrLastSplit[i] == arrVowels[j]) {
                console.log(i);
                shortenLast = arrLastSplit.splice(i, arrLastSplit.length - i);
                console.log(shortenLast);
            }
        }
    }

    let shortenName = shortenFirst.concat(shortenLast);
    let string = shortenName.join('');

    
    // Viết hoa chữ đầu của ShortenName
    let shortenNameU = string.charAt(0).toUpperCase() + string.slice(1)
    console.log(shortenNameU);
    // alert ('Mật Danh rút gọn của Ngài là: ' + shortenNameU);
    document.getElementById('sname').innerHTML = shortenNameU;

}




