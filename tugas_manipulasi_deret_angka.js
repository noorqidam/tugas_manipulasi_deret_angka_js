var str = 'Hallo';
console.log(str.split('').reverse().join(''));

function deretAngka(n) {
    var hasil = ''
    for (var i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            hasil += 'NIOMIC '
        } else if (i % 3 === 0) {
            hasil += 'NIO '
        } else if (i % 5 === 0) {
            hasil += 'MIC '
        } else {
            hasil += i + ' '
        }
    }
    return hasil
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));