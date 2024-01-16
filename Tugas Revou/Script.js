document.addEventListener("DOMContentLoaded", function () {
    const squareSideInput = document.getElementById('squareSide');
    const countButton = document.getElementById('countButton');
    var resetButton = document.getElementById('resetButton');

    
    

    resetButton.addEventListener('click', function () {

        squareSideInput.value = '';
    });
});
function calculatePerimeter() {
    // Ambil nilai panjang sisi dari input
    var sideLength = parseFloat(document.getElementById('squareSide').value);

    // Validasi input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid");
        return;
    }

    // Hitung keliling
    var perimeter = 4 * sideLength;

    // Tampilkan hasil
    var html = "<div>Langkah-langkah perhitungan:</div><br>" +
               "<div>Sisi x Sisi</div><br>" +
               "<div>" + sideLength + " x " + sideLength + "</div><br>" +
               "<div>Perimeter = 4 x " + sideLength + " = " + perimeter + "</div><br>";

    document.getElementById('result').innerHTML = html;
}
