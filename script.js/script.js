function hitungLuas() {
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var luas = 0.5 * alas * tinggi;

    document.getElementById("result").innerHTML = "L = 1/2 x " + alas + " x " + tinggi + " = " + luas;
}
