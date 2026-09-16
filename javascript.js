function main() {
    var jumlahData, i, jumlahPositif, jumlahNegatif, jumlahGenap, jumlahGanjil;
    var angka, totalSeluruh, rata2;

    jumlahPositif = 0;
    jumlahNegatif = 0;
    jumlahGenap = 0;
    jumlahGanjil = 0;
    totalSeluruh = 0;
    window.alert("Berapa banyak angka yang ingin dianalisis?");
    jumlahData = Number(window.prompt('Enter a value for jumlahData'));
    for (i = 1; i <= jumlahData; i++) {
        window.alert("Masukkan angka: ");
        angka = Number(window.prompt('Enter a value for angka'));
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
    window.alert("Jumlah angka positif: " + jumlahPositif);
    window.alert("Jumlah angka negatif: " + jumlahNegatif);
    window.alert("Jumlah angka ganjil: " + jumlahGanjil);
    window.alert("Jumlah angka genap: " + jumlahGenap);
    window.alert("Total seluruh angka yang dimasukkan: " + totalSeluruh);
    window.alert("Rata-rata: " + rata2);
}
