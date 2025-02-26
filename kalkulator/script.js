window.alert('ini kalkulator ku')
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    window.alert("Angka berhasil di hitung");
    try {

        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
