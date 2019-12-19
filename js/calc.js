function calculate() {
    var no1 = parseInt(document.getElementById('no1').value);
    var no2 = parseInt(document.getElementById('no2').value);
    var ops = document.getElementById('ops').value;

    var ans;
    if(ops === '+') {
        ans = no1 + no2
    } else if (ops === '-') {
        ans = no1 - no2;
    } else if (ops === '*') {
        ans = no1 * no2;
    }

    document.getElementById('ans').value = ans;
}