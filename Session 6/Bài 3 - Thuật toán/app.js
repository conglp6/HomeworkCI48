function yes() {
    let a = (((document.getElementsByClassName("lp lp--input")[0].value).trim()).split(" ")).map(function (x) { return parseFloat(x) });
    console.log(a);
    let k = parseFloat(document.getElementsByClassName("lp lp--k")[0].value);

    let outPut = "";

    for (let i = 0; i < a.length; i++) {
        if (isNaN(a[i]) == true || Number.isInteger(a[i]) == false) {
            alert('Nhập lại mảng, mảng phải gồm những số nguyên');
        } else if (isNaN(a[i]) == false && Number.isInteger(a[i]) == true &&
            isNaN(k) == false && Number.isInteger(k) == true && k > 0) {

            for (let j = i + 1; j < a.length; j++) {
                if ((a[i] + a[j]) % k === 0) {

                    outPut += `(${i}, ${j}) `;
                    console.log(outPut);
                    document.getElementById('outPut').innerHTML = outPut;
                }
            }

        }
    }
    if (isNaN(k) == true || Number.isInteger(k) == false || k < 0) {
        alert('Nhập lại k, k phải là số nguyên dương');
    }
}




