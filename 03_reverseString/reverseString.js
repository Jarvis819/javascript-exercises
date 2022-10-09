
const reverseString = function (str) {
    let revString = "";
    // console.log(str)
    let len = str.length;
    // console.log(len)
    let position = len - 1
    for (i = 0; i < len; i++) {
        revString += str[position]
        position--

    }
    return revString
};

// Do not edit below this line
module.exports = reverseString;
