module.exports = function reverse (n) {
        let a = n.toString().split('').reverse().join('');
        a = parseInt(a,10);
        return a;

}
