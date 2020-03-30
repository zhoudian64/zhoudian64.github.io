const sjcl = require("sjcl");

try {
    plainText = sjcl.json.encrypt("P@ssw0rd", 'someData', {"salt": ""});
    console.log(plainText);
} catch (e) {
    console.log(e);
}