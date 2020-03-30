const sjcl = require("sjcl");

try {
    plainText = sjcl.json.decrypt("P@ssw0rd", 'encryptData');
    console.log(plainText);
} catch (e) {
    console.log(e);
}