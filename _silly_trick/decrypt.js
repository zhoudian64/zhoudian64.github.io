const sjcl = require("sjcl");

function d(pwd, encrypted) {
    const ct =
        '{"iv":"' +
        encrypted.substring(0, 24) +
        ',salt:"","ct":"' +
        encrypted.substring(22) +
        '"}';
    const txt = sjcl.json.decrypt(pwd, ct);
    console.log(txt)
}

try {
    d("P@ssw0rd", "OF9mAwDYze3HVFda/QNvDA==XBcfrAfvH3ogPUOcc/Pow+c9")
} catch (e) {
    console.log(e);
}