let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("パリンドロームでない場合はfalseを返す", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("単純なパリンドロームの場合はtrueを返す", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("パリンドロームが大文字小文字混じりでもtrueを返す", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("パリンドロームに句読点があってもtrueを返す", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("文字だけを返す", function() {
      let punctuatedPalindrome = new Phrase("Madam, I’m Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("空文字列はパリンドロームではない", function() {
      let emptyString = new Phrase("");
      assert(!emptyString.palindrome());
    });
  });
});