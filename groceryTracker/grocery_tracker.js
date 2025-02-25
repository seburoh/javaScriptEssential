function calculateArea() {
    let res = 0;
    res += parseFloat(document.getElementById('grocery1').value);
    res += parseFloat(document.getElementById('grocery2').value);
    res += parseFloat(document.getElementById('grocery3').value);

    document.getElementById('result').innerText = `The total amount is: ${res}`;
}
