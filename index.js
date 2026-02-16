module.exports = Phrase;

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


// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // 文字列を全て小文字に変換
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // コンテンツの文字だけを返す
  this.letters = function letters() {
    const letterRegex = /^[a-z]$/i;
    return Array.from(this.content).filter(c => letterRegex.test(c)).join("");
  }

  // プロセスを終えたフレーズを返す
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // フレーズがパリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// let frase = new Phrase("Madam, I'm Adam.");
// console.log(frase.letters());
