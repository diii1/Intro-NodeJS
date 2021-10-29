var _ = require('lodash');

console.log("=========================");
console.log("Jawaban No 1");
console.log("=========================");
const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];
let siswa = _.without(anggota_kelas, mengumpulkan_tugas[0], mengumpulkan_tugas[1]);
console.log('a. ', siswa);
let kelompok = _.chunk(anggota_kelas, 2);
console.log('b. ', kelompok);
let output = _.join(anggota_kelas, '-');
console.log('c. ', output);
let notFirst = _.drop(anggota_kelas);
console.log('d. ', notFirst);
let rev = _.reverse(anggota_kelas);
console.log('e. ', rev);

console.log("\n=========================");
console.log("Jawaban No 2");
console.log("=========================");
const a = "DDUUDDUDUUUD";
const b = "UDDDUDUU";
const c = "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD";

function lembah(string) {
    const arr = string.split("");
    let down = 0;
    let up = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'D') {
            down += 1;
        } else if (arr[i] == 'U') {
            up += 1;
        }
        if (down == up) {
            down = 0;
            up = 0;
            result += 1;
        }
    }
    console.log(result - 1);
}

lembah(a);
lembah(b);
lembah(c);

console.log("\n=========================");
console.log("Jawaban No 3");
console.log("=========================");
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    perkenalanDiri() {
        if (this.pekerjaan == undefined) {
            this.pekerjaan = this.status;
        }
        return `Halo, saya ${this.nama}. ${this.umur>17? this.status=='Mahasiswa'? 'Saya belum bekerja' : 'Saya sudah dewasa' : 'Saya masih dibawah umur'}`;
    }
}

class Pelajar extends Orang {
    constructor(nama, umur, status) {
        super(nama, umur);
        if (this.umur > 17) {
            if (this.pekerjaan != undefined) {
                this.status = this.pekerjaan;
            } else {
                this.status = "Mahasiswa";
            }
        }
    }
}

class Pekerja extends Orang {
    constructor(nama, umur, pekerjaan) {
        super(nama, umur);
        this.pekerjaan = pekerjaan;
    }
    perkenalanProfesi() {
        return `Hi, Saya seorang ${this.pekerjaan}`;
    }
}

const ana = new Orang('Ana', 10);
const ini = new Pelajar('Ini', 18);
const budi = new Pekerja('Budi', 28, 'Koki');

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);