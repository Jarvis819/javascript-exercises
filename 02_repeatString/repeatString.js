const repeatString = function (str, num) {
    if (num < 0) {
        return "ERROR";
    }
    let newString = ""
    for (i = 0; i < num; i++) {
        newString += str
    }
    return newString


};
repeatString('hey', -1)

// Do not edit below this line
module.exports = repeatString;
