var Plain = "abcdefghijklmnopqrstuvwxyz";
var Cipher = Plain.split('').reverse().join('');

var atbash = function(string) {
  var solution = '';
  for ( var i =0; i < string.length; i++ ) {
    var cipher_index = Plain.indexOf(string[i]);
    solution += Cipher[cipher_index]
  }
  console.log(solution);
};

console.log(Plain);
console.log(Cipher);

atbash('test');
atbash('gvhg');
