// Stringにreverse()メソッドを追加
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Stringにblank()メソッドを追加
String.prototype.blank = function() {
  const blank = /^\s*$/;
  return blank.test(this);
}

// Arrayにlast()メソッドを追加
Array.prototype.last = function() {
  return this[this.length - 1];
}

// 文字列を逆順にして返す
function reverse(str) {
  return Array.from(str).reverse().join("");
}

// 回文ならtrueを、違うならfalseを返す
function palindrome(str) {
  let processedContent = str.toLowerCase();
  return processedContent === reverse(processedContent);
}

// e-mailのユーザー名とドメイン名を要素として持つ配列を返す
function emailParts(email) {
  return email.toLowerCase().split("@")
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  this.processor = (string) => {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   this.processedContent = function processedContent(){
//     return this.processor(this.translation);
//   }
// }

// // Phraseオブジェクトを継承
// TranslatedPhrase.prototype = new Phrase();

// let car = new Phrase("Racecar");
// console.log(car.content);
// console.log(car.palindrome());
// console.log(car.louder());

let str = " a";
let ary = [0, 1, 2, 3, 4, 9];

console.log(str.reverse());
console.log(str.blank());
console.log(ary.last());