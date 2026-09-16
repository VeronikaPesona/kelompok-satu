function main() {
    var jumlahData, i, jumlahPositif, jumlahNegatif, jumlahGenap, jumlahGanjil;
    var angka, totalSeluruh, rata2;

    jumlahPositif = 0;
    jumlahNegatif = 0;
    jumlahGenap = 0;
    jumlahGanjil = 0;
    totalSeluruh = 0;
    jumlahData = Number(prompt("Berapa banyak angka yang ingin dianalisis? "));
    for (i = 1; i <= jumlahData; i++) {
        angka = Number(prompt("Masukkan angka: "));
        totalSeluruh = totalSeluruh + angka;
        if (angka > 0) {
            jumlahPositif = jumlahPositif + 1;
        } else {
            if (angka < 0) {
                jumlahNegatif = jumlahNegatif + 1;
            }
        }
        if (Math.abs(angka) % 2 == 0) {
            jumlahGenap = jumlahGenap + 1;
        } else {
            jumlahGanjil = jumlahGanjil + 1;
        }
    }
    rata2 = totalSeluruh / jumlahData;
    alert("Jumlah angka positif: " + jumlahPositif);
    alert("Jumlah angka negatif: " + jumlahNegatif);
    alert("Jumlah angka ganjil: " + jumlahGanjil);
    alert("Jumlah angka genap: " + jumlahGenap);
    alert("Total seluruh angka yang dimasukkan: " + totalSeluruh);
    alert("Rata-rata: " + rata2);
}
main()
