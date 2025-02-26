function hitungAritmatika() {
    let a = parseFloat(document.getElementById('a').value);
    let d = parseFloat(document.getElementById('d').value);
    let n = parseFloat(document.getElementById('n').value);
    if (!isNaN(a) && !isNaN(d) && !isNaN(n)) {
        let sum = (n / 2) * (2 * a + (n - 1) * d);
        document.getElementById('hasilAritmatika').innerText = `Jumlah Deret Aritmatika: ${sum}`;
    } else {
        document.getElementById('hasilAritmatika').innerText = 'Masukkan nilai yang valid';
    }
}

function hitungGeometriTakHingga() {
    let a = parseFloat(document.getElementById('a_geo').value);
    let r = parseFloat(document.getElementById('r').value);
    if (!isNaN(a) && !isNaN(r) && Math.abs(r) < 1) {
        let sum = a / (1 - r);
        document.getElementById('hasilGeometriTakHingga').innerText = `Jumlah Deret Geometri Tak Hingga: ${sum}`;
    } else {
        document.getElementById('hasilGeometriTakHingga').innerText = 'Masukkan nilai yang valid (|r| < 1)';
    }
}

function hitungGeometriBiasa() {
    let a = parseFloat(document.getElementById('a_geo_biasa').value);
    let r = parseFloat(document.getElementById('r_biasa').value);
    let n = parseFloat(document.getElementById('n_geo').value);
    if (!isNaN(a) && !isNaN(r) && !isNaN(n)) {
        let sum = a * (1 - Math.pow(r, n)) / (1 - r);
        document.getElementById('hasilGeometriBiasa').innerText = `Jumlah Deret Geometri: ${sum}`;
    } else {
        document.getElementById('hasilGeometriBiasa').innerText = 'Masukkan nilai yang valid';
    }
}