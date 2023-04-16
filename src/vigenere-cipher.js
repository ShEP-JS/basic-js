const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
    let alphStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphObj = {};

    for (let i = 0; i < alphStr.length; i++) {
      alphObj[alphStr[i]] = i;
    }

    this.alphStr = alphStr;
    this.alphObj = alphObj;
  }
  encrypt(text, key) {
    if (text == null || key == null) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let code = "";
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.alphObj[text[i]] != null) {
        code +=
          this.alphStr[
            (this.alphObj[text[i]] + this.alphObj[key[j % key.length]]) %
              this.alphStr.length
          ];
        j++;
      } else {
        code += text[i];
      }
    }
    return code;
  }

  decrypt(text, key) {
    if (text == null || key == null) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let code = "";
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.alphObj[text[i]] != null) {
        code +=
          this.alphStr[
            (this.alphObj[text[i]] -
              this.alphObj[key[j % key.length]] +
              this.alphStr.length) %
              this.alphStr.length
          ];
        j++;
      } else {
        code += text[i];
      }
      return code;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
