const sumAll = function (num1, num2) {
    if (typeof num1 != typeof num2) {
        return "ERROR"
    }




    let int1 = parseInt(num1)
    console.log(int1)

    let int2 = parseInt(num2)
    console.log(int2)

    // if (int1 || int2 < -1) {
    //     console.log("why")
    //     return "error"
    // } else if (int1 || int2 == NaN) {
    //     return "error"
    // }
    let large
    let small
    if (int1 < int2) {
        large = int2
        small = int1
    } else {
        large = int1
        small = int2
    }
    if (small < 0) {
        //    
        return "ERROR"
    }
    console.log(large)
    console.log(small)


    let sum = 0
    for (let i = small; i <= large; i++) {
        // console.log(i)
        sum += i
        // console.log(sum)
    }
    console.log(sum)
    return sum




};

// Do not edit below this line
module.exports = sumAll;
