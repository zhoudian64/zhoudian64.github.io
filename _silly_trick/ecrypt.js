const sjcl = require("sjcl");

function e(pwd, raw) {
    let txt = sjcl.json.encrypt(
        pwd, raw,
        {"salt": ""}
    );
    let data = JSON.parse(txt)
    console.log(data.iv + data.ct)
}

try {
    e("P@ssw0rd", "test")
} catch (e) {
    console.log(e);
}